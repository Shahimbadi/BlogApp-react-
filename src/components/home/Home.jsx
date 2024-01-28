import React, { useState, useEffect } from 'react'
import {Box, Typography, Link, Button, Card} from '@mui/material'
import axios from 'axios'
import './homeStyle.css'

const Home=()=>{
    const [blogs, setBlogs] = useState([])
    const [userId, setUserId] = useState('')
    const [Id, setId] = useState('')
    const [title, setTitle] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setBlogs(response.data)
      })
      .catch(error => {
        console.error('Error fetching blogs:', error)
      });
  }, []);

  const whenClicked = (userid, id, title)=>{
    setUserId(userid)
    setId(id)
    setTitle(title)
  }

  return (
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      fontFamily:'sans-serif',
      fontSize:'30px'
      }}>
      <Box variant= "contained" sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "10vh",
        backgroundColor: "#073971",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        marginRight: "15px",
        paddingRight:'30px'
        }}>
        <Button sx={{ backgroundColor: "ButtonFace", color: "black" }} variant='contained'><Link href="/blogform">Add Blog</Link></Button>
      </Box>
        <Card sx={{
          marginTop:'100px',
          background:'transparent',
          height:'70vh',
          border: '2px solid rgba(255, 255, 255, .2)',
          backdropFilter: 'blur(20px)',
          borderRadius: '30px',
          padding: '30px 40px',
          boxShadow:' 0 0 10px rgba(0, 0, 0, 0.5)',
          overflowY:'scroll',
          marginRight:'20px',
          marginLeft:'20px'
          }}>
            <Typography variant='h4' sx={{
              border:'1px solid lightgrey',
              borderRadius:'10px',
              width:'100%',
              textAlign:'center'
              }}>Blog Dashboard</Typography>
            
            <ul style={{listStyleType:'none', paddingTop:'10px'}}>
                {blogs.map(blog => (
                    <li key={blog.id} style={{borderBottom:'1px solid lightgrey', width:'100%'}}>
                        <p><a onClick={() => whenClicked(blog.userId, blog.id, blog.title)} style={{cursor:'pointer'}}>{blog.id}.{blog.title}</a></p>
                    </li>
                ))}
            </ul>
        </Card>
      
      <Box sx={{width:'75%',
          height:'70vh',
          background:'transparent',
          border: '2px solid rgba(255, 255, 255, .2)',
          backdropFilter: 'blur(20px)',
          borderRadius: '30px',
          padding: '30px 40px',
          boxShadow:' 0 0 10px rgba(0, 0, 0, 0.5)',
          marginTop:'100px',
          marginLeft:'20px',
          marginRight:'20px',
          overflowY:'scroll'
          }}>
        <Typography variant='h4' sx={{textAlign:'center'}}>Blogs</Typography>
        <p>UserId: {userId}</p> 
        <p>Id: {Id}</p>  
        <p>Title: {title}</p>   
      </Box>
    </Box>
  )
}

export default Home

