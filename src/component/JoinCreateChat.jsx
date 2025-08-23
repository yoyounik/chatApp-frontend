import React, { useState } from 'react'
import chatIcon from '../assets/img.png'
import toast from 'react-hot-toast';
import { createRoomAPI, joinChatAPI } from '../service/RoomService';
import useChatContext from '../context/ChatContext';
import { useNavigate } from 'react-router-dom';
const JoinCreateChat = () => {
    const[detail, setDetail] = useState({
        roomId: "",
        userName: "",
    });

    const {roomId, userName, setRoomId, setCurrentUser, setConnected} = useChatContext();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [loadingText, setLoadingText] = useState("");

    function handleFormInputChange(event) {
        setDetail({
            ...detail,
            [event.target.name]: event.target.value,
        });
    }

    function validateForm() {
        if(detail.userName === "" || detail.roomId === ""){
            toast.error("Invalid Input !!");
            return false;
        }
        return true;
    }

    async function joinChat() {
        if(validateForm()) {
            setIsLoading(true);
            setLoadingText("Joining room... please wait for 2 mins 😊, using free version of Render(for backend), so it get shuts off after every 15mins");
            //join chat
            try {
                const room = await joinChatAPI(detail.roomId);
                toast.success("Room Joined....")
                setCurrentUser(detail.userName);    

                setRoomId(room.roomId);
                setConnected(true);
                navigate('/chat');
                
            } catch (error) {
                console.log(error)
                if(error.response && error.response.status === 400){
                    toast.error(error.response.data || "Room not found!");
                }else{
                    toast.error("Error in joining room")
                }
            }
            finally {
                setIsLoading(false);
            }
        }
    }

    async function createRoom() {
        if(validateForm()) {
            setIsLoading(true);           // Add this line
            setLoadingText("Creating room...  please wait for 2 mins 😊, using free version of Render(for backend), so it get shuts off after every 15mins");
            //create room
            console.log(detail)
            //call api to create room on backend
            try {
                const response = await createRoomAPI(detail.roomId)
                console.log(response)
                toast.success("Room Created !!")

                setCurrentUser(detail.userName)
                setRoomId(response.roomId)
                setConnected(true)

                navigate('/chat');

                //forward to chat page.jsx

            } catch (error) {
                console.log(error)
                if(error.status == 400){
                    toast.error("Room already exist !!");
                }else{
                    toast("Error in creating room")
                }
            }
            finally{
                setIsLoading(false);
            }
        }
    }



  return (
    <div className="min-h-screen flex items-center justify-center ">
        <div className="p-10 dark:border-gray-700 border w-full flex flex-col gap-5 max-w-md rounded dark:bg-gray-800 shadow">
            <div>
                <img src={chatIcon} className="w-24 mx-auto" />
            </div>
            
            <h1 className="text-2xl font-semibold text-center ">
                {isLoading ? "Please wait....for 2 mins 😊, using Free Render, so it will take time" : "Join Room/ Create Room."}
            </h1>

            {isLoading && (
                <div className="text-center">
                    <div className="flex justify-center mb-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {loadingText}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        ⏱️ This may take 1-3 minutes on free tier
                    </p>
                </div>
            )}
            
            {/* name div */}
            <div className="">
                <label htmlFor="name" className="block font-medium mb-2">
                    Your name
                </label>

                <input
                onChange={handleFormInputChange}
                value={detail.userName}
                type="text"
                id="name"
                name="userName"
                placeholder="Enter the name"
                className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* room id div */}
            <div className="">
                <label htmlFor="name" className="block font-medium mb-2">
                    Room ID / New Room ID
                </label>
                <input
                    name='roomId'
                    onChange={handleFormInputChange}
                    value={detail.roomId}
                    type="text"
                    id="name"
                    placeholder="Enter the room id"
                    className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* button */}
            <div className="flex justify-center gap-2 mt-4">
                <button onClick={joinChat} disabled={isLoading} className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-full">
                    Join Room
                </button>

                <button onClick={createRoom} disabled={isLoading} className="px-3 py-2 dark:bg-orange-500 hover:dark:bg-orange-800 rounded-full">
                    Create Room
                </button>
            </div>


                
        </div>
    </div>
  )
}

export default JoinCreateChat