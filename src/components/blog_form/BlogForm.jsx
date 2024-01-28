import { Box, Typography, Card, Stack, Input, InputLabel, TextareaAutosize, Button, CardContent, Link } from '@mui/material';
import React from 'react'
import {useNavigate} from 'react-router-dom'

const BlogForm=()=>{
    const navigate=useNavigate()

    return (
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            marginTop:'20vh'
            }}>
            <Box>
                <Card sx={{
                    background:'transparent',
                    border: '2px solid rgba(255, 255, 255, .2)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '30px',
                    padding: '30px 40px',
                    boxShadow:' 0 0 10px rgba(0, 0, 0, 0.5)',
                    width:'70vw'
                    }}>
                    <CardContent>
                        <Typography variant='h3'>Add Blog</Typography>
                        <Stack style={{width:'100%'}}>
                            <InputLabel htmlFor="blogName">Blog Name:</InputLabel>
                            <Input variant='contained' type="text" id="blogName" name="blogName"/>
                            
                            <InputLabel htmlFor="authorName" sx={{marginTop:'1vh'}}>Author Name:</InputLabel>
                            <Input variant='contained' type="text" id="authorName" name="authorName"/>

                            <InputLabel htmlFor="description" sx={{marginTop:'1vh'}}>Description:</InputLabel>
                            <TextareaAutosize variant='contained' id="description" name="description" minRows={5}></TextareaAutosize>
                                
                            <Button variant='contained' onClick={()=>{navigate('/home')}} type="submit" sx={{marginTop:'5vh'}}>Submit Blog</Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Box>
      )
  }
  
export default BlogForm