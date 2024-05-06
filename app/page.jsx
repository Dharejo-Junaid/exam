// pages/index.js

import { useState, useEffect } from 'react';
import styles from '../../page.module.css';

import { getDepartments } from '../utils/api'; // Function to fetch departments from API

export default function Home() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch departments when the component mounts
    async function fetchDepartments() {
      try {
        const departmentsData = await getDepartments();
        setDepartments(departmentsData);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    }
    fetchDepartments();
  }, []);

  return (
    <div>
      <h1>Department Home</h1>
      <div className={styles}></div>
    </div>
  );
}