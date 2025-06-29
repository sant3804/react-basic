import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx';

const object = [
  {
    name: 'Arjun Kumar',
    age: 20,
    address: { city: 'Delhi', state: 'Delhi' }
  },
  {
    name: 'Santosh Kumar',
    age: 22,
    address: { city: 'Patna', state: 'Bihar' }
  },
  {
    name: 'Shivam Raj',
    age: 21,
    address: { city: 'Mumbai', state: 'Maharashtra' }
  },
  {
    name: 'Anjali Sharma',
    age: 23,
    address: { city: 'Bangalore', state: 'Karnataka' }
  },
  {
    name: 'Ravi Singh',
    age: 24,
    address: { city: 'Jaipur', state: 'Rajasthan' }
  },
  {
    name: 'Pooja Mehta',
    age: 25,
    address: { city: 'Ahmedabad', state: 'Gujarat' }
  },
  {
    name: 'Vikram Yadav',
    age: 26,
    address: { city: 'Lucknow', state: 'Uttar Pradesh' }
  },
  {
    name: 'Neha Verma',
    age: 27,
    address: { city: 'Kolkata', state: 'West Bengal' }
  },
  {
    name: 'Amit Sinha',
    age: 28,
    address: { city: 'Chandigarh', state: 'Punjab' }
  },
  {
    name: 'Divya Kapoor',
    age: 29,
    address: { city: 'Hyderabad', state: 'Telangana' }
  }
];


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    
  <div className="card-container">
    {object.map((person, i) => (
      <Card key={i} name={person} allNames={object} />
    ))}
  </div>
</StrictMode>

)
