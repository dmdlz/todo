import React, { useState } from 'react';
import { Checkbox, Box, Typography, Button } from '@mui/material';
import EditTask from '../modals/EditTask'
import { format } from 'date-fns';

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
    };

    const { primaryColor, secondaryColor } = categories[taskObj.Category] || categories.Work;

    const toggleModal = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <Box sx={{ width: '300px', mr: 5, position: 'relative' }}>
            <Box sx={{ backgroundColor: isChecked ? "#888888" : primaryColor, height: '10px' }} />
            <Box sx={{ height: '170px', backgroundColor: isChecked ? "#888888" : secondaryColor, p: 2, borderRadius: 2 }}>
                <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} sx={{ width: 50 }} />
                <Typography
                    variant="h6"
                    component="span"
                    sx={{
                        backgroundColor: isChecked ? "#888888" : secondaryColor,
                        borderRadius: 1
                    }}
                >
                    {taskObj.Name}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    {taskObj.Description}
                </Typography>
                {taskObj.Deadline && (
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        Deadline: {format(new Date(taskObj.Deadline), 'yyyy-MM-dd')}
                    </Typography>
                )}
                <Box sx={{ position: 'absolute', top: 160, left: 160 }}>
                    <Button onClick={toggleModal} sx={{ color: 'black', cursor: 'pointer' }}>
                        수정
                    </Button>
                    <Button onClick={handleDelete} sx={{ color: 'black', cursor: 'pointer' }}>
                        삭제
                    </Button>
                </Box>
            </Box>
            <EditTask modal={modal} toggle={toggleModal} updateTask={updateTask} taskObj={taskObj} />
        </Box>
    );
};

export default Card;