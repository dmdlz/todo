import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import EditTask from '../modals/EditTask'

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const categories = {
        Work: {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        Personal: {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        Shopping: {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        Guitar: {
            primaryColor: "gray",
            secondaryColor: "#999999"
        }
        // 추가 카테고리 색상 정의
    };

    const { primaryColor, secondaryColor } = categories[taskObj.Category] || categories.Work; // 카테고리에 따른 색상 가져오기

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div class="card-wrapper mr-5">
            <div class="card-top" style={{ "background-color": isChecked ? "black" : primaryColor }}></div>
            <div class="task-holder">
                <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                <span class="card-header" style={{ "background-color": isChecked ? "gray" : secondaryColor, "border-radius": "10px", "text-decoration": isChecked ? "line-through" : "none" }}>{taskObj.Name}</span>
                <p className="mt-3">{taskObj.Description}</p>

                <div style={{ "position": "absolute", "top": "160px", "left": "160px" }}>
                    <button style={{ "color": primaryColor, "cursor": "pointer" }} onClick={() => setModal(true)}>수정</button>
                    <button style={{ "color": primaryColor, "cursor": "pointer" }} onClick={handleDelete}>삭제</button>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;