import React from "react"
import Link from "next/link"
import MoviesDetails from "../components/MoviesDetails"
import PageHeader from "../components/PageHeader"
import { Card } from "react-bootstrap"


const About = (props) => {

    const getStaticProps = () => {
        return new Promise((resolve, reject) => {
            fetch('https://puce-bright-dolphin.cyclic.app/api/movie/_id')
                .then(res => res.json())
                .then(data => {
                    resolve({ props: { movie: data } })
                })
        })
    }

    return (
        <>
  
        <PageHeader text="About the Developer: Mayara Rodrigues" />
            <Card>
                <Card.Body className="card bg-light" >
                I'm an international student who came to Canada to improve my knowledge of the development area and my English as well. But unfortunately, COVID-19 mess up all my plans.
                In my country, I specialized in SQL, queries and building reports. And today, here, doing this program, my challenge is to discover a new programming language that I like
                , and I like SQL. Up to now, I'm more likely to follow WEB programming using JavaScript, I'm also doing ASP.NET in WEB524, but I remember much C++, a 
                traumatic course.
                <br />
                <br />
                <footer className="card-footer text-muted-footer">
                    I like movies about fiction and multiverse, so I choose the <Link href="/movies/Matrix" passHref>Matrix</Link> . It is a good movie to watch.   
                </footer>
                </Card.Body>
                <MoviesDetails movie = {props.movie}/>
            </Card>
        </>
    )
}

export default About