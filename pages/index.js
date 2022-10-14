/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Mayara Rodrigues Student ID: 118758200 Date: Oct 13, 2022
*       URL: https://frightened-jade-woolens.cyclic.app/
*
*
********************************************************************************/ 

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { Pagination, Accordion } from 'react-bootstrap'
import MoviesDetails from '../components/MoviesDetails'
import PageHeader from '../components/PageHeader'

export default function Home() {

  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(`https://puce-bright-dolphin.cyclic.app/api/movies?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPage(data);
    }
  }, [data]);

  function previous() {
    if (page > 1) {
      setPage(page => page - 1)
    }
  }

  function next() {
    setPage(page => page + 1)
  }

  return (
    <div className={styles.container}>
      <PageHeader text="Film Collection: Sorted by Date" />
      <Accordion defaultActiveKey="0">
        {pageData.map((movie, index) => {
          return (
            <Accordion.Item eventKey={movie._id} key={index}>
              <Accordion.Header>
                <strong>{movie.title}</strong> ({movie.year}: Directed By {movie.directors.join(", ")}
              </Accordion.Header>
              <Accordion.Body>
                <MoviesDetails movie={movie} />
              </Accordion.Body>
            </Accordion.Item>
          )
        }
        )}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
      <Layout />
    </div>
  )
}
