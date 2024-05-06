'use client';
import { use, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from '../../page.module.css';

export default function AddDepartment() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/departments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, location }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      router.push('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <p className={styles.error}>{error}</p>}
      <h2>Department Information</h2>
      <div className={styles.formGroup}>
        <label htmlFor='name'>Department Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Enter department name'
          className={styles.input}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='location'>Location:</label>
        <input
          type='text'
          id='location'
          name='location'
          placeholder='Enter location'
          className={styles.input}
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button type='submit' className={styles.submitBtn} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}