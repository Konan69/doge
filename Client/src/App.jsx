import React, { useState, useEffect } from 'react';
import './App.css';
import { FaTwitter} from 'react-icons/fa';
import { FaBook} from 'react-icons/fa'



const App = () => {
  const [search, setSearch] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search.length < 42) {
      alert('Invalid address');
      // You can perform additional actions here, such as updating a state variable for displaying the error message in the UI
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
      alert('Your request has been processed, click OK or close and share the loaded tweet to complete airdrop registration!');
      const tweetText = encodeURIComponent('LETS START A $RIOT 🔥. I just joined the @RIOTONARB Airdrop. check their pinned tweet to register!! ');
      const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
      window.location.href = tweetUrl;
    }, 1500); // 3 seconds delay
    }
  };
  

  const handleChange = (event) => {
    setSearch(event.target.value);
    
  };

  return (
    <div className='Main'> 
     <div className='Content' >
        <h1 className='RIOT'> Want to join Doge on Base's first airdrop raffle?</h1>
          <div className='wallet'>
            Enter your wallet below and click to join airdrop
          </div>
        <form onSubmit={handleSubmit}>
          <input
            value = {search}
            type="text"
            name="city"
            placeholder="BASE WALLET ADDRESS"
            onChange={handleChange}
          />
          <div>
          <button type="submit">JOIN THE AIRDROP</button>
          </div>
        </form>
        <div className='Submit'>
        {isSubmitting && <p>Submitting... Please wait</p>}
        </div>
        <div className="twitter-icon">
        <a href="https://x.com/_doge_on_base" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={32} style={{ color: '#050302' }} />
        </a>
        <div className='docs-icon'>
        <a href="" target="_blank" rel="noopener noreferrer">
        <FaBook size={32} style={{ color: '#050302' }} />
        </a> 
        </div>
          </div>
        
      </div> 
    </div> 
    
  );
};

export default App;
