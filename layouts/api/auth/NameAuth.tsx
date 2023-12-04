import React, { useState, useCallback } from 'react'
import { database } from 'firebaseConfig.js'
import { collection, getDocs } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { getAuth, updateProfile } from 'firebase/auth'
import { Button, Box, TextField } from '@mui/material'

export default function NameAuth() {
  const auth = getAuth()
  const [displayName, setDisplayName] = useState<string>('')
  const router = useRouter()
  const postsData = collection(database, 'posts')
  const [firedata, setFiredata] = useState<{ id: string }[]>([]);  
  const [result, setResult] = useState<string>('')

  const updateName = async () => {
    const user = auth.currentUser;
    if (user !== null) {
      updateProfile(user, {
        displayName: displayName,
      })
        .then(() => {
          alert("プロフィールを更新しました。");
          setDisplayName("");
          setResult("");
          getallPost();
          router.push("/profile");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Handle the case when auth.currentUser is null
      console.error("User is null");
    }
  };

  const getallPost = async () => {
    await getDocs(postsData).then((response) => {
      setFiredata(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id }
        }),
      )
    })
  }

  return (
    <>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <h2>名前の更新</h2>

        <TextField
          id='outlined-basic'
          label='名前'
          variant='outlined'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setDisplayName(event.target.value)
          }
        />
      </Box>
      <Button variant='outlined' className='m-5' onClick={updateName}>
        名前を更新する
      </Button>
    </>
  )
}
