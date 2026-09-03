'use client';
import {useState} from 'react';
import {auth} from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage();
const [email,setEmail]= useState;
const [username ,setUserName ]