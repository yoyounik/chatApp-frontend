import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { MdAttachFile, MdSend } from 'react-icons/md'
import avatarIcon from '../assets/avataaars.png'
import useChatContext from '../context/ChatContext'
import { useNavigate } from 'react-router'
import SockJS from 'sockjs-client'
import { baseURL } from '../config/AxiosHelper'
import { Stomp } from '@stomp/stompjs'
import toast from 'react-hot-toast'
import { getMessagess } from '../service/RoomService'
import { timeAgo } from '../config/Helper'



const ChatPage = () => {
    const {roomId, currentUser, connected, setConnected, setRoomId, setCurrentUser} = useChatContext();

    const navigate = useNavigate();
    useEffect(()=>{
        if(!connected){
            navigate("/");
        }
    }, [connected, roomId, currentUser]);


const [messages, setMessages] = useState([]);
const [input, setInput] = useState("")
const inputRef = useRef(null)
const chatBoxRef = useRef(null)
const [stompClient, setStompClient] = useState(null)

//purane message ko load krne k liye
useEffect(() => {
    async function loadMessage() {
        try{
            const messages = await getMessagess(roomId)
            console.log(messages)
            setMessages(messages)
        }
        catch(error){

        } 
    }

    loadMessage()
}, [])

//scroll down
useLayoutEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scroll({
        top: chatBoxRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);


//stompClient
useEffect(() => {
    const connectWebSocket = ()=>{

        //SockJS
        const sock = new SockJS(`${baseURL}/chat`)
        const client = Stomp.over(sock)

        client.connect({}, () => {
            setStompClient(client);
            toast.success('connected')

            client.subscribe(`/topic/room/${roomId}`, (message) => {
            console.log(message);

            const newMessage = JSON.parse(message.body);

            setMessages((prev) => [...prev, newMessage]);

            //rest of the work after success receiving the message
            });
        });
    };

    connectWebSocket();

}, [roomId])

//send message handle
const sendMessage = async () => {
    if(stompClient && connected && input.trim()) {
        // console.log(input)

        const message = {
            sender: currentUser,
            content: input,
            roomId: roomId,
        };

        stompClient.send(
        `/app/sendMessage/${roomId}`,
        {},
        JSON.stringify(message)
        );
        setInput("");
    }
}

function handleLogout() {
    stompClient.disconnect();
    setConnected(false);
    setRoomId("");
    setCurrentUser("");
    navigate("/");
  }




// const [roomId, setRoomId] = useState("")
// const [currentUser] = useState("Nikhil");

  return <div className=''>
    {/* header portion */}
    <header className="dark:border-gray-700  fixed w-full dark:bg-gray-800 py-5 shadow flex justify-around items-center">
        {/* room name container */}
        <div>
            <h1 className="text-xl font-semibold">
                <span>Room: Rooma ka naam</span>
            </h1>

        </div>
        {/* username container */}
        <div>
            <h1 className="text-xl font-semibold">
                <span>{currentUser}</span>
            </h1>
        </div>
        {/* button: leave room */}
        <div>
            <button onClick={handleLogout} className="dark:bg-red-500 dark:hover:bg-red-700 px-3 py-2 rounded-full">
                Leave Room
            </button>

        </div>
    </header>
    {/* main portion */}
    <main ref={chatBoxRef} className="py-20 px-10   w-2/3 dark:bg-slate-600 mx-auto h-screen overflow-auto ">
        {
            messages.map((message, index) =>(
                <div key={index} className={`flex ${message.sender===currentUser ? 'justify-end': 'justify-start'} `}>
                    <div className={`my-2 ${message.sender===currentUser ? 'bg-green-500': 'bg-blue-500'} p-2 max-w-xs rounde`}>
                        <div className='flex flex-row gap-2'>
                            <img className='h-10 w-10' src={avatarIcon} alt="" />
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-bold'>{message.sender}</p>
                                <p>{message.content}</p>
                                <p className="text-xs text-gray-700">
                                    {timeAgo(message.timeStamp)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }

    </main>

    {/* input message container */}
    <div className=" fixed bottom-4 w-full h-16 ">
        <div className="h-full  pr-10 gap-4 flex items-center justify-between rounded-full w-1/2 mx-auto dark:bg-gray-900">
            <input 
            value={input}
            onChange={(e) => {
                setInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            type="text"  placeholder="Type your message here..." className=" w-full  dark:border-gray-600 b dark:bg-gray-800  px-5 py-2 rounded-full h-full focus:outline-none  " />
            <div className="flex gap-1">
                <button className="dark:bg-purple-600 h-10 w-10  flex   justify-center items-center rounded-full">
                    <MdAttachFile size={20} />
                </button>
                <button onClick={sendMessage} className="dark:bg-green-600 h-10 w-10  flex   justify-center items-center rounded-full">
                    <MdSend size={20} />
                </button>
            </div>
        </div>
    </div>

  </div>
}

export default ChatPage