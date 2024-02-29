/* eslint-disable default-case */
import React from 'react'
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { Link,useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ReactPlayer from 'react-player';
import Response from '../response';
import Search from '../components/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import notfoundImage from '../not found.jpg'
const SearchPage = () => {
    const [{term='tesla'},dispatch] =useStateValue()
   const {data} = useGoogleSearch(term)
    // const data = Response
    const location = useLocation()
    let content,dataCount
    switch(location.pathname){
        case '/search' : 
        content = data?.items.map(item=>(
            <div className="searchPage__result">
                <a href={item.link}>
                    {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (
                        <img className='searchPage__resultImage' src={item.pagemap?.cse_image?.length>0 &&
                            item.pagemap?.cse_image[0]?.src} alt=""/>
                    )}
                {item.displayLink} <ArrowDropDownIcon/>
                </a>
                <a href={item.link} className="searchPage__resultTitle">
                    <h2><span class='title'>{item.title}</span></h2>
                    <p className="searchPage__resultSnippet">
                        {item.snippet}
                    </p>
                </a>
            </div>
        ))
        break;
        case '/images':
            dataCount = data?.items.map(item=>(
                item.pagemap?.cse_image?.length>0 ? item.pagemap?.cse_image?.length : 0
            ))
            content = (<div className='image__container'> {data?.items.map(item=>(
                item.pagemap?.cse_image?.length>0 && <div className="searchPage__result ">
                    <a href={item.link}>
                        {item.pagemap?.cse_image?.length>0 ? item.pagemap?.cse_image[0]?.src && (
                            <img className='searchPage__Image ' src={item.pagemap?.cse_image?.length>0 &&
                                item.pagemap?.cse_image[0]?.src} alt=""/>
                         ) : <img className='searchPage__Image ' alt="" src={notfoundImage}/>}
                    </a>
                    <a href={item.link} className="searchPage__resultTitle">
                        <h2>{item.title.length > 30 ? `${item.title.substring(0,30)}...` : item.title }</h2>
                    </a>
                </div>
            ))
            }</div>
            )
            if(dataCount?.reduce((acc,item)=> acc+ item,0) === 0){
                content=<p className='errorMessage'>Sorry Couldn't found Images for this!!</p>
               }
            break;
        case '/videos':
            dataCount = data?.items.map(item=>(
                    item.pagemap?.videoobject?.length > 0 ? item.pagemap?.videoobject?.length : 0
                ))
            content = (<div className='video__container'>
                         {data?.items.map(item=>(
                        item.pagemap?.videoobject?.length > 0 && <div className="searchPage__result video__container">
                          
                            {
                                item.pagemap.videoobject.map(video=>(
                                    <a href={item.link}>
    
                                        <ReactPlayer url={video.contenturl} controls width="300px" height="300px" />
                                        <h2>{video.name.length > 30 ? `${video.name.substring(0,30)}...` : video.name}</h2> 
                                    </a>  
                                ))
                            }
                         
                         </div> 
                     
                    )) 
                    }</div>
                    )
                    console.log()
               if(dataCount?.reduce((acc,item)=> acc+ item,0) === 0){
                content=<p className='errorMessage'>Sorry Couldn't found videos for this!!</p>
               }
                   
            

               
                break;
    }

  return ( 
    <div className='searchPage'>
      <div className="searchPage__header">
        <Link to='/' >
          <h1 class='search'>Search</h1>
        </Link>
        <div className="searchPage__headerBody">
            <Search hideButton/>
            <div className="searchPage__options">
                <div className="searchPage__optionsLeft">
                    <div className="searchPage__option">
                        <SearchIcon/>
                        <Link to='/search'>All</Link>
                    </div>
                    <div className="searchPage__option">
                        <DescriptionIcon/>
                        <Link to='/videos'>Vidoes</Link>
                    </div>
                    <div className="searchPage__option">
                        <ImageIcon/>
                        <Link to='/images'>Images</Link>
                    </div>

                </div>
            </div>
        </div>
      </div>{
        
      }
     { term && (<div className="searchPage__results">
        <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results({data?.searchInformation.formattedSearchTime}  seconds) for {term}
        </p>
        
        {
            content
        }
      </div>)}
    </div>
  )
}

export default SearchPage
