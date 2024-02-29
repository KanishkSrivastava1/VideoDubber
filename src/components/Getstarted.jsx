import React, { useState } from 'react';
import {UnstyledButton,Input, Checkbox, Slider,Text, Alert } from '@mantine/core';
import { Select, TextInput } from '@mantine/core';
import classes from '../css/mantineinput.css';
import { IconInfoCircle } from '@tabler/icons-react';
import bt from '../css/mbutton.css'
import { useNavigate } from 'react-router-dom'


const Getstarted = () => {
  let navigate = useNavigate()
  
const [value, onChange] = useState(true);
const [sldr, setSlider] = useState(40);
const [inputext, setText] = useState('');
const [post,setPost]= useState(false);
const [str,setstr] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    setPost(true);
    const dummy= `${inputext}${sldr}${value}`;
    setstr(dummy)
    console.log(dummy)
    try {
      const response = await fetch(
        'https://videodubber.ai/testinput',
        {
          method: 'POST',
          body: JSON.stringify({
            inputstring : str
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
        )
  
        if (response.status === 200) {
          const json = await response.json()
          console.log(json);
          navigate('/')
        } else {
          
          setTimeout(() => {
          }, 1000)
          throw new Error('Request failed with status: ' + response.status)
        }
      } catch (error) {
        console.log(error)
      }
    }
    const icon = <IconInfoCircle />;


  return (
    <>
    
    { post && <Alert className="absolute" variant="light" color="blue" title="Alert title" icon={icon} onClick={() => setPost(false)} withCloseButton>
      The input string is {str} 
    </Alert>}
    
      <form onSubmit={handleSubmit} className="p-6  z-0 rounded-md	 bg-back my-20 flex justify-center flex-col max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <TextInput value ={inputext} onChange={(event) => setText(event.currentTarget.value)} label="text" placeholder="enter text" className={classes}/>

        </div>
        <Slider value={sldr} onChange={(event) => setSlider(event.currentTarget.value)} className='m-3'
      color="blue"
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
        <div className="relative z-0 w-full mb-5 group">
        </div>
        <UnstyledButton onClick={() => onChange(!value)} className={bt.button}>
          <div className="flex align-center">
            <Checkbox
              checked={value}
              onChange={() => {}}
              tabIndex={-1}
              size="md"
              mr="xl"
              styles={{ input: { cursor: 'pointer' } }}
              aria-hidden
            />

            <div>
              <Text fw={500} mb={7} lh={1}>
              Check
              </Text>
              <Text fz="sm" c="dimmed">
                terms and conditions 
              </Text>
            </div>
          </div>
    </UnstyledButton>
        
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    
    </>

  );
};

export default Getstarted;
