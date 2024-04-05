import React, { useState, useEffect } from 'react';
import './App.css';
import { FaTwitter} from 'react-icons/fa';
import { FaBook} from 'react-icons/fa'
import { SpeedInsights } from "@vercel/speed-insights/react"



const App = () => {
  const [search, setSearch] = useState('');
  const [extraInputValue, setExtraInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTwitterFollowed, setIsTwitterFollowed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isTwitterFollowed) {
    alert('Please follow us on Twitter before joining the airdrop.')
     } else if (search.length < 42) {
      alert('Invalid address');
      // You can perform additional actions here, such as updating a state variable for displaying the error message in the UI
    }  else if (!extraInputValue) {
      alert('Please enter X USERNAME');
    }  else {
      setIsSubmitting(true);
      setTimeout(() => {
      alert('Your request has been processed, click OK or close and share the loaded tweet to complete airdrop registration!');
      const tweetText = encodeURIComponent('Powered by $DOB🐶. I just applied for the @doge_on__base airdrop Pledge here : https://airdrop.dogebse.xyz');
      const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
      window.location.href = tweetUrl;
    }, 1500); // 3 seconds delay
    }
  };
  
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleExtraInputChange = (event) => {
    setExtraInputValue(event.target.value);
  };

  const handleTwitterFollow = () => {
    // You can also track that user has followed Twitter here if needed.
    setIsTwitterFollowed(true);
  };
  
  const tokenomics = ''

  return (
    <main>
    <div className='bg-image'> </div>
    <div className="bg-blur"></div>
    <div className='Content' >
       <h1 className='RIOT'>
        <h1>DogeOnBase</h1>
        <h1>NFT / Airdrop Raffle</h1>
        </h1>
        <hr></hr>
        <div className='tokenomics'>
         <h2>NFT Collection</h2> 
         <ul>
          <li>3,333 supply.</li>
          <li>Mint on Manifold.xyz</li>
         </ul>
        
        

        <h2>$DOB Tokenomics</h2>
        <ul>
          <li>Token total supply 1,000,000,000.</li>
          <li>40% liquidity</li>
          <li>30% airdrop to NFT holders</li>
          <li>15% community airdrop</li>
          <li>7% marketing</li>
          <li>5% team</li>
          <li>3% exchange listing</li>
        </ul>

        <h2>Roadmap Phase 1</h2>
        <ul>
          <li>Create social</li>
          <li>Mint NFT</li>
          <li>Launch $DOB token</li>
          <li>Airdrop NFT holders</li>
          <li>Begin Marketing</li>
        </ul>

        <h2>Roadmap Phase 2</h2>
        <ul>
        <li>New Website Launch</li>
        <li>List on exchange TBA</li>
  </ul>
        </div>
        <hr></hr>
        <div className='wallet'>
          <p>Follow us on Twitter <a href="https://twitter.com/intent/follow?screen_name=doge_on__base" onClick={handleTwitterFollow} target="_blank" rel="noopener noreferrer" className='link'>here</a> and submit wallet.</p>
          </div>
          
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="base_wallet">
              <label htmlFor="base_walletid">What's Your Base Address?</label>
                <input
                    value = {search}
                    type="text"
                    name="city"
                    id='base_walletid'
                    placeholder="EVM WALLET ADDRESS"
                    onChange={handleChange}
                />
                
            </div>

            <div className="x_username">
              <label htmlFor="x_usernameid">What's Your X Username?</label>
                <input
                    type="text"
                    name="extraInput1"
                    id='x_usernameid'
                    value={extraInputValue}
                    placeholder="X USERNAME"
                    onChange={handleExtraInputChange}
                />
                
            </div>
          </div>
          
           
          <div></div>
          <div>
          <button type="submit">JOIN THE AIRDROP</button>
          </div>
        </form>
        <div className='Submit'>
        {isSubmitting && <p>Submitting... Please wait</p>}
        </div>

        
        <div className="twitter-icon">
        <a href="https://x.com/doge_on__base" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={32} style={{ color: '#fff' }} />
        </a>
        <div className='docs-icon'>
        <a href="" target="_blank" rel="noopener noreferrer">
        <FaBook size={32} style={{ color: '#fff' }} />
        </a> 
        </div>
        </div>
      </div>
      <SpeedInsights />
    </main>
    
  );
};

export default App;
