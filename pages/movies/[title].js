/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Mayara Rodrigues Student ID: 118758200 Date: Oct 13, 2022
*
*
********************************************************************************/ 

import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import MoviesDetails from "../../components/MoviesDetails";
import Error from "next/error";
import PageHeader from "../../components/PageHeader";

const MovieDetailsByTitle =() =>{
    const router = useRouter();
    const { title } = router.query;

    const {data, error} = useSWR(`https://puce-bright-dolphin.cyclic.app/api/movies?page=1&perPage=10&title=${title}`);

    //if(typeof data ==='string' || data.value.trim() !== '')&& (data.length >0
    if(data !== null || data !== undefined) {
        return(
            <>
            {data.map(movie => (
                <div key={movie._id} >
                <PageHeader text= {movie.title} />
                <MoviesDetails movie={movie} />
                </div>
            ))}
            </>
        )
    }
    else{ 
        return(
            <>
            <Error statusCode={404} />
            </>
        )
    }
}

export default MovieDetailsByTitle