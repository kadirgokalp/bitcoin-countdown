import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { AiOutlineDollar, AiOutlinePound, AiOutlineEuro } from 'react-icons/ai';

const BitcoinPrice = () => {
  const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  const [prices, setPrice] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getBitcoinPrices = async () => {
      try {
        let interval = setInterval(async () => {
          const response = await axios.get(URL);
          setPrice(response.data.bpi);
          setIsLoaded(true);
        }, 10000);

        return () => {
          clearInterval(interval);
        };
      } catch (e) {
        console.log(e);
      }
    };
    getBitcoinPrices();
  }, []);

  return (
    <div className='prices-container'>
      {isLoaded && (
        <div className='currency'>
          <div className='price'>
            <h2>
              BTC / USD <AiOutlineDollar className='price-icon' />
            </h2>
            <p>
              {`${prices.USD.rate}  ${prices.USD.code} (${prices.USD.description})`}
            </p>
          </div>
          <div className='price'>
            <h2>
              BTC / EUR <AiOutlineEuro className='price-icon' />{' '}
            </h2>
            <p>
              {`${prices.EUR.rate}  ${prices.EUR.code} (${prices.EUR.description})`}
            </p>
          </div>
          <div className='price'>
            <h2>
              BTC / GBP <AiOutlinePound className='price-icon' />
            </h2>
            <p>
              {`${prices.GBP.rate}  ${prices.GBP.code} (${prices.GBP.description})`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BitcoinPrice;
