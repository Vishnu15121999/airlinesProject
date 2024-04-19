import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Divider, TextField, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import InputAdornment from '@mui/material/InputAdornment';
import NorthIcon from '@mui/icons-material/North';
import { useSelector } from 'react-redux';
import { questionActions } from '../store';
import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid';

const Dashboard = () => {
  const allQuestions = useSelector((state) => state.allQuestions.questions) || [];
  const [conversation, setConversation] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [welcomeScreen, setWelcomeScreen] = useState(true);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const answer = useSelector((state) => state.flights.flights);

  useEffect(()=>{
    const initalConversation=allQuestions.map((question)=>({
      type:'question',
      content:question,
      conversationID:uuid()
    }));
    setConversation(initalConversation);
  },[allQuestions]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuestion=input.trim();
    if (!trimmedQuestion) {
      return;
    }

    const updatedConversation=[...conversation];
    updatedConversation.push({type:'question' , content:trimmedQuestion});
    updatedConversation.push({type:'answer',content:answer});
    setConversation(updatedConversation);
    
    dispatch(questionActions.setQuestions(trimmedQuestion));
    setWelcomeScreen(false);
    setInput('');
  }

  console.log(conversation);

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value)
  }

  const filterFlights = answer.filter((flight) =>
    flight.name.toLowerCase().includes(searchItem.toLowerCase()))

  return (
    <div className='dashboard-container'>
      <Box sx={{ width: '12%', display: 'flex', flexDirection: 'column', marginTop: '20px', position: 'relative' }}>

        {/* -------------------------------------------------------------- Side Menu -------------------------------------------------------------- */}

        <Box sx={{ margin: '15px 0px', display: 'flex', gap: 1 }}>
          <img style={{ borderRadius: '20px' }} src='\images\Circular icon indigo.jpg' alt='#' />
          <Typography sx={{ fontWeight: '600', color: 'white', fontSize: '24px' }}>Indi.AI</Typography>
        </Box>
        <Divider sx={{ backgroundColor: 'white' }} />
        <Box sx={{ margin: '15px 0px' }}>
          <Button sx={{ margin: '5px 0px', bgcolor: 'white', color: 'black', fontWeight: '600', gap: 1, width: 'fit-content', padding: '5px 10px' }}> <AddBoxIcon sx={{ color: 'navy' }} /> New Chat</Button>
          <Button sx={{ margin: '5px 0px', display: 'flex', gap: 1, color: 'white', fontWeight: '600', bgcolor: 'transparent' }}> <SearchIcon /> Search</Button>
        </Box>

        {/* -------------------------------------------------------------- Questions List Area -------------------------------------------------------------- */}

        <Divider sx={{ backgroundColor: 'white' }} />
        <Box sx={{ margin: '10px 0px', width: '100%' }}>
          <Button sx={{ color: 'white', fontWeight: '600', gap: 1 }}><HistoryIcon />Chat History</Button>
          <Box sx={{ height: '200px', width: '90%', display: "flex", flexDirection: 'column', alignItems: 'center', marginLeft: '30px', marginTop: "10px" }}>
            {
              <ul>
                {allQuestions.length > 0 ? (
                  allQuestions.map((ques) => (
                    <li style={{ color: 'white' }}><Typography sx={{ color: 'white' }}>{ques}</Typography></li>
                  ))
                ) : (<Typography sx={{ color: "white", fontWeight: '600' }}></Typography>)}
              </ul>
            }
          </Box>
        </Box>

        {/* -------------------------------------------------------------- Footer Name -------------------------------------------------------------- */}

        <Box sx={{ position: 'absolute', bottom: '20px', width: '100%' }}>
          <Divider sx={{ backgroundColor: 'white' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
            <Avatar sx={{ width: '30px', height: '30px' }}>A</Avatar>
            <Button sx={{ color: 'white', fontWeight: '600' }}>Adwait Teke</Button>
          </Box>
        </Box>
      </Box>

      {/* -------------------------------------------------------------- Division of two screens -------------------------------------------------------------- */}

      <Box sx={{ position: 'relative', width: '85%', bgcolor: 'white', height: '720px', marginTop: '10px', borderRadius: '15px', display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'space-evenly' }}>
        {welcomeScreen && <> <Box sx={{ height: '100px' }}>
          <Typography sx={{ fontWeight: '600', color: 'navy', fontSize: '36px' }}>Indi.AI | Your Personal Chatbot</Typography>
        </Box>
          <Box sx={{ height: '100px' }}>
            <Typography sx={{ fontWeight: '600', color: 'navy', fontSize: '32px' }}>How can I help you today?</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: '10px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ width: '300px', height: '85px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundImage: 'linear-gradient(rgba(37, 154, 218, 0.33), rgba(0, 75, 255, 0.33))' }}>
                <Typography sx={{ fontWeight: '600' }}>Tell the personal offers to me</Typography>
                <Typography>First choice of customer</Typography>
              </Box>
              <Box sx={{ width: '300px', height: '85px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundImage: 'linear-gradient(rgba(37, 154, 218, 0.33), rgba(0, 75, 255, 0.33))' }}>
                <Typography sx={{ fontWeight: '600' }}>Tell the personal offers to me</Typography>
                <Typography>First choice of customer</Typography>
              </Box>
              <Box sx={{ width: '300px', height: '85px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundImage: 'linear-gradient(rgba(37, 154, 218, 0.33), rgba(0, 75, 255, 0.33))' }}>
                <Typography sx={{ fontWeight: '600' }}>Tell the personal offers to me</Typography>
                <Typography>First choice of customer</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ width: '300px', height: '85px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundImage: 'linear-gradient(rgba(37, 154, 218, 0.33), rgba(0, 75, 255, 0.33))' }}>
                <Typography sx={{ fontWeight: '600' }}>Tell the personal offers to me</Typography>
                <Typography>First choice of customer</Typography>
              </Box>
              <Box sx={{ width: '300px', height: '85px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundImage: 'linear-gradient(rgba(37, 154, 218, 0.33), rgba(0, 75, 255, 0.33))' }}>
                <Typography sx={{ fontWeight: '600' }}>Tell the personal offers to me</Typography>
                <Typography>First choice of customer</Typography>
              </Box>
              <Box sx={{ width: '300px', height: '85px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundImage: 'linear-gradient(rgba(37, 154, 218, 0.33), rgba(0, 75, 255, 0.33))' }}>
                <Typography sx={{ fontWeight: '600' }}>Tell the personal offers to me</Typography>
                <Typography>First choice of customer</Typography>
              </Box>
            </Box>
          </Box></>}

        {/* -------------------------------------------------- Answer Screen Starts Here (Golden Display Screen) --------------------------------------------------- */}

        {!welcomeScreen &&
          <Box sx={{ width: '80%', height: '85%', overflow: 'auto', scrollbarWidth: 'none', padding: '15px' }}>
            {conversation.map((message) => (
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar>AT</Avatar>
                  <Typography sx={{ fontWeight: '600' }}>Adwait Teke</Typography>
                </Box>






                {/* <Box sx={{ margin: '10px 45px', fontWeight: '600' }}> */}
                  <Box></Box>
                {/* </Box> */}






                <Box sx={{ margin: '10px 0px' }}>
                  <Box sx={{ display: 'flex', padding: '5px', width: '60%', justifyContent: 'space-between', border: '1px solid black', borderRadius: '10px 10px 0 0' }}>
                    <Button sx={{ bgcolor: 'white', color: 'black', fontWeight: '600', margin: '5px' }}>Analyse</Button>
                    <input value={searchItem} onChange={handleSearchChange} style={{ margin: '5px', borderRadius: '10px', width: '300px', padding: '10px', fontWeight: '600', bgcolor: '#F4F2FF', color: '#6E6893' }} placeholder='Search flights by name' />
                    <Button sx={{ bgcolor: '#6D5BD0', color: 'white', fontWeight: '600', margin: '5px' }}>Excel</Button>
                    <Button sx={{ bgcolor: '#6D5BD0', color: 'white', fontWeight: '600', margin: '5px' }}>PDF</Button>
                    <Button sx={{ bgcolor: '#FFE0E0', color: 'black', fontWeight: '600', margin: '5px' }}>Export</Button>
                  </Box>
                  <table className='flights_table'>
                    <thead>
                      <tr>
                        <th className='table-head'>Flights Name<br />Indgio Airlines</th>
                        <th className='table-head'>Rates</th>
                        <th className='table-head'>Date</th>
                        <th className='table-head'>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        filterFlights.map((row, index) => (
                          <tr key={index}>
                            <td className='table-date'>{row.name}</td>
                            <td className='table-date'>{row.date}</td>
                            <td className='table-date'>{row.rate}</td>
                            <td className='table-date'>{row.time}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </Box>
                <Box sx={{ margin: '40px 0px' }}>
                  <img style={{ width: '70%', height: '300px' }} src='https://www.researchgate.net/publication/352106674/figure/fig5/AS:1030745132900360@1622760198347/Comparative-graphical-representation-of-number-of-flight-delays-at-Murtala-Mohammed.ppm' alt='#' />
                </Box>
              </Box>
            ))}
          </Box>}

        {/* -------------------------------------------------------------- TextField Area -------------------------------------------------------- */}

        <Divider />
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: '10px' }}>
          <TextField value={input} onChange={(e)=>setInput(e.target.value)} variant='outlined' sx={{ width: '80%', borderRadius: '10px', display: 'flex', justifyContent: 'center', bgcolor: 'azure' }} placeholder='Type and press enter' InputProps={{
            endAdornment: (
              <InputAdornment sx={{ height: 'fit-content', padding: '10px 5px', borderRadius: '10px', backgroundImage: 'linear-gradient(rgba(37, 154, 218, 0.33), rgba(0, 75, 255, 0.33))' }} position="end">
                {/* <img src='\images\send button.jpg' alt='#'/> */}
                <NorthIcon onClick={handleSubmit} sx={{ color: 'white', cursor: 'pointer' }} />
              </InputAdornment>),
          }} />
        </Box>
      </Box>
    </div>
  )
}

export default Dashboard;

//{allQuestions.map((ques) => (<p> - {ques}</p>))}

// const newConversation=[
//   ...conversation,
//   {type:'question',content:trimmedQuestion},
//   {type:'answer',content:answer}
// ]