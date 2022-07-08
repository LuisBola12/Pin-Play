import { React, useState, useEffect } from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { TopPlayersTable } from '../Components/TopPlayersTable/TopPlayersTable';
import '../App.css';
import { DropDown } from '../Components/DropDown/DropDown';
import { getCategories } from '../Utils/getTourneysData/getTourneysData';
import { Footer } from '../Components/Footer/Footer';
import { Loader } from '../Components/Loader/Loader';

export const Classification = () => {
  const [infoReceived, setInfoReceived] = useState(false);
  const [categories, setCategories] = useState(false);
  const [category, setCategory] = useState('Primera');
  const [actualPage, setActualPage] = useState(1);
  
  useEffect(() => {
    const getCategoriesInfo = async () =>{
      const categories = await getCategories();
      if(categories){
        setInfoReceived(true);
        setCategories(categories);
      }
    }
    getCategoriesInfo();
  }, []);
  
  return  !infoReceived ? <Loader/> : (
    <div className='background-page'>
      <div className='sticky-navbar'>
        <Navbar />
      </div>
      <div className='page-content'>
      <div className='topPlayers-dropdown-data'>
          <DropDown options={categories} setActualPage={setActualPage} setCategory={setCategory}/>
        </div>
        <div className='topPlayers-table-data'>
          <TopPlayersTable category={category} actualPage={actualPage} setActualPage={setActualPage}/>
        </div>
      </div>
      <Footer color={'black'} position={'relative'}></Footer>
    </div>
  )
}