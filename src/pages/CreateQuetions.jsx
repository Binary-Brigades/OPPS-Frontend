import React, { useState, useEffect } from "react";
import {
  IoLockClosed,
  IoPencil,
  IoLockClosedOutline,
  IoPerson,
} from "react-icons/io5";
import {
  MdLock,
  MdMail,
  MdNumbers,
  MdOutlineEmail,
  MdPhone,
} from "react-icons/md";
import { CiLock, CiPhone } from "react-icons/ci";
import { Link } from "react-router-dom";
import Logo from "../assets/MMU.png";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import useAuthToken from "../../hooks/useAuth";
import Login from "./Login";
import { useSidebar } from "../../hooks/useHandleSideBar";

function CreateQuestions() {
  const { getItem } = useAuthToken();
  const { token, getUserDetail } = getItem();
  const { open, handleSideBar, handleSidebarItemClick } = useSidebar();

  const [question, setQuestion] = useState("");
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    // Retrieve saved questions from local storage on component mount
    const savedQuestions = localStorage.getItem("savedQuestions");
    console.log("Retrieved questions:", savedQuestions);
    if (savedQuestions !== null) {
      setQuestionsList(JSON.parse(savedQuestions));
    }
  }, []);

  //   useEffect(() => {
  //     // Save questions to local storage whenever questionsList changes

  //   }, [questionsList]);

  const handleAddQuestion = () => {
    if (question.trim() !== "") {
      setQuestionsList((prevQuestionsList) => {
        const newQuestionsList = [...prevQuestionsList, question];
        localStorage.setItem(
          "savedQuestions",
          JSON.stringify(newQuestionsList)
        );
        return newQuestionsList;
      });
      setQuestion("");
    }
  };

  return (
    <>
      {token !== null ? (
        <div>
          <Navbar
            handleSideBar={handleSideBar}
            open={open}
            getUserDetail={getUserDetail}
          />
          <Sidebar
            open={open}
            handleSideBar={handleSideBar}
            getUserDetail={getUserDetail}
          />

          <div className="p-6 h-full justify-start items-start w-full flex text-black md:pl-[400px]  flex-col">
            <h5 className="text-blue-500 text-xl font-bold uppercase  md:left-[250px] mt-20">
              Create Questions
            </h5>
            <div className="flex flex-col mt-4 w-full md:gap-4">
              <input
                type="text"
                required={true}
                value={question}
                placeholder="Type to create a question..."
                onChange={(e) => setQuestion(e.target.value)}
                className="mt-4 border border-gray-500 bg-gray-200 outline-none px-6 py-4 w-[100%] h-[60px] rounded-lg md:w-[600px]"
              />
              <button
                onClick={handleAddQuestion}
                className="bg-blue-500 px-2 py-1.5 rounded-lg w-[150px] md:justify-self-end md:self-center self-end mt-4 text-white font-bold hover:bg-blue-700 md:mt-0"
              >
                Add a question
              </button>
            </div>
            <div className="mt-4">
              <h6 className="text-lg font-bold">
                {questionsList.length > 0 ? "Questions List:" : null}
              </h6>
              <ul className="flex flex-col w-full">
                {questionsList.map((q, index) => (
                  <li key={index} className="leading-8 text-left flex gap-4">
                    <span className="font-bold">{index}</span> <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col mt-4 w-full md:gap-4">
              <button
                onClick={handleAddQuestion}
                className="bg-blue-500 px-2 py-1.5 rounded-lg w-[150px] self-end mt-4 text-white font-bold hover:bg-blue-700 md:mt-0 md:mr-[400px]"
              >
                Submit Questions
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default CreateQuestions;
