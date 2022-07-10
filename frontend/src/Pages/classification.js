import { React, useState, useEffect } from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { TopPlayersTable } from '../Components/TopPlayersTable/TopPlayersTable';
import '../App.css';
import { DropDown } from '../Components/DropDown/DropDown';
import { getCategories } from '../Utils/getTourneysData/getTourneysData';
import { Footer } from '../Components/Footer/Footer';
import { Loader } from '../Components/Loader/Loader';
import { Pagination } from '../Components/Pagination/Pagination';
import { getAmountPages } from '../Utils/getPlayersData/getPlayersData';

export const Classification = () => {
  const [maxPagesReceived, setMaxPagesReceived] = useState(false);
  const [categoriesReceived, setCategoriesReceived] = useState(false);
  const [categories, setCategories] = useState(false);
  const [category, setCategory] = useState('Primera');
  const [actualPage, setActualPage] = useState(1);
  const [amountPages, setAmountPages] = useState([]);
  
  useEffect(() => {
    const getAmountPagesCategory = async () => {
      const dataAmountPages = await getAmountPages(category, 10);
      if (dataAmountPages) {
        setMaxPagesReceived(true);
        setAmountPages(dataAmountPages);
      }
    };
    const getCategoriesInfo = async () =>{
      const categories = await getCategories();
      if(categories){
        setCategoriesReceived(true);
        setCategories(categories);
      }
    }
    getCategoriesInfo();
    getAmountPagesCategory();
  }, []);
  
  return !categoriesReceived || !maxPagesReceived ? <Loader/> : (
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
        <div className="topPlayers-pages">
        <Pagination handlePage={setActualPage} amountPages={amountPages} actualPage={actualPage}/>
        </div>
      </div>
      <Footer color={'black'} position={'relative'}></Footer>
    </div>
  )
}