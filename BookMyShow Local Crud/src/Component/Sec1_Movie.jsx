import React, { useState } from 'react'
import ii1 from "../assets/ii1.png"

function Sec1_Movie() {
    const data=[
        {
            id: 1,
            title: "Chhaava",
            price: 450,
            description:"UA16+",
            category: "Action/Drama/Triller",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAxNS43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408691-wefbnyucnt-portrait.jpg",
            rating: 9.3,
            language:"Hindi"
        },
        {
            id: 2,
            title: "Captain America: Brave New World",
            price: 400,
            description:"UA16+",
            category: "Action",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4xLzEwICAzSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00399765-lxpecsqysh-portrait.jpg",
            rating: 7.1,
            language:"Hindi/English/Tamil/Telugu"
        },
        {
            id: 3,
            title: "Umbarro",
            price: 250,
            description:"UA13+",
            category: "Comedy/Drama",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICAzLjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00420660-nvvrhdyfnf-portrait.jpg",
            rating: 9.1,
            language:"Gujarati"
        },
        {
            id: 4,
            title: "Faati Ne?",
            price: 350,
            description:"UA16+",
            category: "Comedy/Horror/Mystery",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA5OTIgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00428340-hzwurwyayc-portrait.jpg",
            rating: 9.1,
            language:"Gujarati"
        },
        {
            id: 5,
            title: "Sanam Teri Kasam",
            price: 200,
            description:"U",
            category: "Drama/Romantic/Musical",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA0MS4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00036895-cmmsqzawtq-portrait.jpg",
            rating: 8.5,
            language:"Hindi"
        },
        {
            id: 6,
            title: "Sky Force",
            price: 300,
            description:"UA13+",
            category: "Action/Thriller/Historical",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA1NC45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00371539-yqjkjctnet-portrait.jpg",
            rating: 8.9,
            language:"Hindi"
        },
        {
            id: 7,
            title: "Deva",
            price: 250,
            description:"UA16+",
            category: "Action/Triller",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny41LzEwICAxOC45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374104-qgsmfbnanb-portrait.jpg",
            rating: 7.5,
            language:"Hindi"
        },
        {
            id: 8,
            title: "Badass Ravi Kumar",
            price: 310,
            description:"UA16+",
            category: "Action/Drama",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4zLzEwICAyLjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00343879-fjgrnlwzgx-portrait.jpg",
            rating: 7.3,
            language:"Hindi"
        },
        {
            id: 9,
            title: "Mufasa: The Lion King",
            price: 280,
            description:"U",
            category: "Adventure,Animation,Drama",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA3OC43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396541-hhkrpankjb-portrait.jpg",
            rating: 8.4,
            language:"English/Hindi/Tamil/Telugu"
        },
        {
            id: 10,
            title: "Dilwale Dulhania Le Jayenge",
            price: 200,
            description:"U",
            category: "Classic/Drama/Romantic",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAzMi4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00000652-gryvezndpg-portrait.jpg",
            rating: 9.3,
            language:"Hindi"
        },
        {
            id: 11,
            title: "Moana 2",
            price: 260,
            description:"U",
            category: "Adventure/Animation/Comedy/Fantacy",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAyMi4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00387901-dapdnkxxpt-portrait.jpg",
            rating: 8.4,
            language:"English/Hindi"
        },
        {
            id: 12,
            title: "Yeh Jawaani Hai Deewani",
            price: 210,
            description:"UA",
            category: "Comedy/Drama/Romantic/Musical",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAzMi43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00012104-dlbbxmwbtr-portrait.jpg",
            rating: 9.2,
            language:"Hindi"
        },
        {
            id: 13,
            title: "Kaashi Raaghav",
            price: 180,
            description:"UA16+",
            category: "Drama",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNzc1IFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00423687-vzjfnmqblz-portrait.jpg",
            rating: 8,
            language:"Gujarati"
        },
        {
            id: 14,
            title: "Loveyapa",
            price: 160,
            description:"UA16+",
            category: "Romantic/Comedy/Drama",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAzLjlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00427632-xhmvucrduf-portrait.jpg",
            rating: 7.9,
            language:"Hindi"
        },
        {
            id: 15,
            title: "Jab We Met",
            price: 230,
            description:"U",
            category: "Romantic/Comedy",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS43LzEwICA4LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00000182-mzjrhpwzvb-portrait.jpg",
            rating: 9.7,
            language:"Hindi"
        },
        {
            id: 16,
            title: "Mom Tane Nai Samjay",
            price: 150,
            description:"UA13+",
            category: "Drama/Family",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICAxLjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00424440-htumtjtrgz-portrait.jpg",
            rating: 8.3,
            language:"Gujarati"
        }
        
        
    ]
    // console.log(data);

    const [search,setSearch]=useState("");
    const [sort,setSort]=useState("none")
    const [cat,setCat]=useState("All");
    const [lan,setlan]=useState("All");

    // const handleSearch  = ()=>{   
    //     const sData=data.filter((el)=>
    //         el.title.toLowerCase().includes(search.toLowerCase())
    //     )
    //     setSearchData(sData)
    // }
    // // console.log(searchData);

    // const sorting=data.sort((a,b)=>{
    //     return sort == "low" ?
    //     a.rating-b.rating:
    //     b.rating-a.rating
    // })
    // // console.log(sorting);

    // const filteringData=data.filter((el)=>{
    //     return cat == "All" ? data : el.category.includes(cat);
    // })

    // console.log(filteringData);


    const filterData = data.filter((el)=>{
        const catagoryCon = cat == "All" || el.category.includes(cat);

        const languageCon = lan == "All" || el.language.includes(lan);
        
        const searchCon=el.title.toLowerCase().includes(search.toLowerCase());

        return catagoryCon && searchCon && languageCon;
    }).sort((a,b)=>{
        return sort == "low" ?
            a.rating-b.rating:
            b.rating-a.rating
    })


    
  return (
    <div className='h-[auto] w-[100%] bg-[#F5F5F5] '>
        <div className="main h-[auto] w-[94%] ml-[3%]  bg-[transparent] flex ">
            <div className="f1 h-[full] w-[25%] ">
                <h1 className='text-[26px] font-semibold mt-[5%] ml-[5%]'>Filters</h1>

            <div className='h-[200px] w-full bg-white ps-[5%]  aa'>

                <p className='text-[#DC354B] mt-[15px]'>Language</p>
                <div className='h-[67%]  w-full flex mt-[5%] align-items-center flex-wrap text-[#DC354B] text-sm' onChange={(e)=>setCat(e.target.value)}>
                    <button className='border h-[25%] w-[21%] cursor-pointer'  onClick={() => setlan('All')}>All</button>
                    <button className='border h-[25%] w-[23%] ms-2 cursor-pointer'  onClick={() => setlan('Hindi')}>Hindi</button>
                    <button className='border h-[25%] w-[27%] ms-2 cursor-pointer'  onClick={() => setlan('English')}>English</button>
                    <button className='border h-[25%] w-[30%]'  onClick={() => setlan('Gujrati')}>Gujrati</button>
                    <button className='border h-[25%] w-[35%] ms-2 cursor-pointer'  onClick={() => setlan('Malayalam')}>Malayalam</button>
                    <button className='border h-[25%] w-[25%] ms-2 cursor-pointer' onClick={() => setlan('Marathi')}>Marathi</button>
                    <button className='border h-[25%] w-[25%]'  onClick={() => setlan('Telugu')}>Telugu</button>
                    <button className='border h-[25%] w-[25%] ms-2 cursor-pointer'  onClick={() => setlan('Tamil')}>Tamil</button>
                </div>
            </div>

                
                <div className='h-[300px] w-full bg-white ps-[5%] mt-4 aa'>
                    <p className='text-[#DC354B] mt-[10px]'>Catagory</p>
                    <div className='h-[80%] mt-[5%] w-full flex  align-items-center flex-wrap text-[#DC354B] text-sm'>
                                
                                    <button className='border h-[13%] cursor-pointer w-[23%]' onClick={() => setCat('All')}>All</button>
                                    <button className='border h-[13%] cursor-pointer w-[27%] ms-2' onClick={() => setCat('Drama')}>Drama</button>
                                    <button className='border h-[13%] cursor-pointer w-[30%] ms-2' onClick={() => setCat('Comedy')}>Comedy</button>
                                    <button className='border h-[13%] cursor-pointer w-[30%]' onClick={() => setCat('Romantic')}>Romantic</button>
                                    <button className='border h-[13%] cursor-pointer w-[30%] ms-2' onClick={() => setCat('Action')}>Action</button>
                                    <button className='border h-[13%] cursor-pointer w-[25%] ms-2' onClick={() => setCat('Family')}>Family</button>
                                    <button className='border h-[13%] cursor-pointer w-[22%] ' onClick={() => setCat('Thriller')}>Thriller</button>
                                    <button className='border h-[13%] cursor-pointer w-[32%] ms-2' onClick={() => setCat('Animation')}>Animation</button>
                                    <button className='border h-[13%] cursor-pointer w-[25%] ms-2' onClick={() => setCat('Classic')}>Classic</button>
                                    <button className='border h-[13%] cursor-pointer w-[27%] ' onClick={() => setCat('Historical')}>Historical</button>
                                    <button className='border h-[13%] cursor-pointer w-[25%] ms-2' onClick={() => setCat('Anime')}>Anime</button>
                                    <button className='border h-[13%] cursor-pointer w-[28%] ms-2' onClick={() => setCat('Fantasy')}>Fantasy</button>
                                    <button className='border h-[13%] cursor-pointer w-[22%] ' onClick={() => setCat('Drama')}>Horror</button>
                                    <button className='border h-[13%] cursor-pointer w-[25%] ms-2' onClick={() => setCat('Musical')}>Musical</button>
                                    <button className='border h-[13%] cursor-pointer w-[30%] ms-2' onClick={() => setCat('Adventure')}>Adventure</button>
                                    <button className='border h-[13%] cursor-pointer w-[40%] ' onClick={() => setCat('Mystery')}>Mystery</button>
                                
                    </div>
                </div>
            </div>
            <div className="f2 h-[auto] w-[73%] ml-[2%] ">
                <div className="head h-[100px] w-[100%]  flex relative items-center">
                <i className="fa-solid fa-magnifying-glass absolute left-[2.5%] top-[44%] text-[gray] text-[13px]"></i>
                <input type="text" className='w-[50%] ml-[1%]  ps-[35px] h-[35px] border'  onChange={(e)=>setSearch(e.target.value)} placeholder='Search for Movies...' name="" id="" />
                
                <select name="" id="" className='border-1 h-[35px] w-[18%] cursor-pointer absolute right-[1%] ' onChange={(e)=>setSort(e.target.value)}>
                    <option value="">Sort by</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>
                </div>
                <div className='h-[75px] mt-[20px] w-[100%]  rounded-[3px] cursor-pointer'>
                    <img src={ii1} alt="" />
                </div>
                <div className="sec grid grid-cols-4 gap-3">
                    {
                        filterData.length > 0 ?
                        filterData.map((el,i)=>{
                        return <>
                           <div className='h-[450px]  mt-[10%] mb-[20px] shadow-sm hover:cursor-pointer' key={i}>
                    <div className="img h-[75%] w-[100%]  rounded-[8px]">
                        <img src={el.image} alt="Image" className='h-[100%] w-[100%] rounded-[8px]' />
                    </div>
                    <div className="txt h-[25%] w-[100%] ps-2 pt-2 ">
                        <h1 className='text-[18px] font-semibold capitalize w-[95%]'>{el.title}</h1>
                        <p className='text-[gray] text-[14px] capitalize'>{el.language}</p>
                        <p className='text-[gray]  capitalize text-[12px]'>{el.category}</p>
                    </div>
                </div>
                        </> 
                    }):
                    (
                        <p className="text-center text-gray-600">No movies found</p>
                    )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sec1_Movie