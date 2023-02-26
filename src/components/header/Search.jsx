import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import '../../App.css'

export const Search = () => {

    window.addEventListener("scrool", function(){
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scroolY > 100)
    })


  return (
    <>
    <section className='search'>
        <div className='container c_flex'>
            <div className='logo width'>
                <img src='https://media.flaticon.com/dist/min/img/default_avatar.png' alt='logo' />
            </div>
            <div className='search-box f_flex'>
                <i className='fa fa-search'></i>
                <input type='text' placeholder='Search ...' />
                <span>All Categories</span>
            </div>
            <div className='icon f_flex width'>
                <i className='fa fa-user icon_circle'></i>
                <div className='cart'>
                    <Link to='/cart'>
                        <i className='fa fa-shopping-bag icon-circle' ></i>
                        <span>0</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
