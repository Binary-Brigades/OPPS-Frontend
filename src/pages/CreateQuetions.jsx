import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
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
import { TiPlus } from "react-icons/ti";

function CreateQuestions() {
  const { getItem } = useAuthToken();
  const { token, getUserDetail } = getItem();
  const { open, handleSideBar, handleSidebarItemClick } = useSidebar();

  const [question, setQuestion] = useState("");
  const [questionsList, setQuestionsList] = useState([]);
  const [template, setTemplate] = useState("");
  const [marks, setMarks] = useState(0);
  const [max_words, setMax_words] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    // Retrieve saved questions from local storage on component mount
    const savedQuestions = localStorage.getItem("savedQuestions");
    console.log("Retrieved questions:", savedQuestions);
    if (savedQuestions !== null) {
      setQuestionsList(JSON.parse(savedQuestions));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (template == "") {
        toast.error("Please enter a template name");
        return;
      } else {
        const resp = await fetch(
          "https://oppsapi.onrender.com/api/v1/proposal/template/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
              title: template,
              category: getUserDetail?.category,
            }),
          }
        );
        const respData = await resp.json();
        toast.success("Template created successfully");
        setData(respData);

        console.log(respData);
      }
      const question = await fetch(
        `https://oppsapi.onrender.com/api/v1/proposal/create_questions/${data.id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify([
            {
              question: questionsList[0],
              marks,
              max_words,
              template: data.id,
              // " marks": marks,
              // " question": questionsList,
              // " max_words": max_words,
              // template: data.id,
            },
          ]),
        }
      );
      const result = await question.json();
      console.log(result);
      setQuestionsList([]);
    } catch (error) {
      console.error(error);
    }
  };
  // const handleAddTemplate = async (e) => {
  //   e.preventDefault();

  // };
  const handleAddQuestion = (e) => {
    e.preventDefault();
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
  console.log(question);
  return (
    <>
      <Toaster />
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

          <form className="p-6 h-full justify-start items-start w-full flex text-black md:pl-[400px]  flex-col">
            <h5 className="text-blue-500 text-xl font-bold uppercase  md:left-[250px] mt-20">
              Create Questions
            </h5>
            <div className="flex  flex-col gap-2 mt-4 w-[100%] md:w-[600px] items-center">
              <h5 className="font-bold w-full text-left">
                {getUserDetail.category} Template Category
              </h5>
              <label
                htmlFor="category"
                className="text-left font-semibold w-full"
              >
                Create Template
              </label>
              <div className="flex mt-2 w-full items-center justify-center gap-1 ">
                <input
                  type="text"
                  id="category"
                  required
                  value={template}
                  placeholder="Add Question template title..."
                  onChange={(e) => {
                    setTemplate(e.target.value);
                  }}
                  className=" border border-gray-500 bg-gray-200 outline-none px-6 py-4 h-[40px] rounded-lg w-full"
                />
                {/* <div
                  className="flex border border-gray-500 bg-gray-200 outline-none rounded-full  w-[40px] h-[40px] text-center items-center justify-center p-2 hover:cursor-pointer"
                  // onClick={handleAddTemplate}
                >
                  <TiPlus className="w-8 h-8 text-blue-500 text-center" />
                </div> */}
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full md:gap-4  ">
              <div className="flex flex-col">
                <label htmlFor="question" className="font-semibold">
                  Question
                </label>
                <input
                  type="text"
                  id="question"
                  // required={true}
                  value={question}
                  placeholder="Type to create a question..."
                  onChange={(e) => setQuestion(e.target.value)}
                  className="mt-4 border border-gray-500 bg-gray-200 outline-none px-6 py-4 w-[100%] h-[60px] rounded-lg md:w-[600px]"
                />
              </div>
              <div className="flex flex-col md:flex-row  text-start items-center md:justify-between gap-4 w-full md:max-w-[600px] mt-[20px] ">
                <div className="flex  w-full flex-row gap-4 justify-between">
                  <div className="flex flex-col w-full">
                    <label htmlFor="max_words" className="font-semibold">
                      Max words
                    </label>

                    <input
                      type="number"
                      value={max_words}
                      min={0}
                      name="max_words"
                      id="max_words"
                      required={true}
                      onChange={(e) => setMax_words(e.target.value)}
                      className="mt-4 border border-gray-500 bg-gray-200 outline-none px-6 py-4 w-full h-[40px] rounded-lg "
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="marks" className="font-semibold">
                      Marks
                    </label>
                    <input
                      value={marks}
                      onChange={(e) => setMarks(e.target.value)}
                      type="number"
                      name=""
                      min={0}
                      id="marks"
                      required={true}
                      className="mt-4 border border-gray-500 bg-gray-200 outline-none px-6 py-4 w-full h-[40px] rounded-lg "
                    />
                  </div>
                </div>

                <div className="self-end">
                  <button
                    onClick={handleAddQuestion}
                    className="bg-blue-500 px-2 py-1.5 rounded-lg w-[150px] self-end  text-white font-bold hover:bg-blue-700 md:mt-[40px]"
                  >
                    Add a question
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h6 className="text-lg font-bold">
                {questionsList.length > 0
                  ? "Questions List:"
                  : "Created questions will show here..."}
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
                onClick={handleSubmit}
                className="bg-blue-500 px-2 py-1.5 rounded-lg w-[150px] self-end mt-4 text-white font-bold hover:bg-blue-700 md:mt-0 md:mr-[330px]"
              >
                Submit Questions
              </button>
            </div>
          </form>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default CreateQuestions;
