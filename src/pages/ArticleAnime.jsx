// import { useState } from "react";
// import Header from "../Header";
// import Footer from "../Footer";

// const ArticleAnime = () => {
//     const [articleAnime, setArticleAnime] = useState([]);

//     const fakeArticleAnime = [

//     {
//         id: 1,
//         title: "Titre de l'anime 1",
//         author: "Auteur de l'anime 1",
//         year: "année de l'anime 1",
//         resume: "résumé de l'anime 1"
//     },
//     {
//         id: 2,
//         title: "Titre de l'anime 2",
//         author: "Auteur de l'anime 2",
//         year: "année de l'anime 2",
//         resume: "résumé de l'anime 2"
//     },
//     {
//         id: 3,
//         title: "Titre de l'anime 3",
//         author: "Auteur de l'anime 3",
//         year: "année de l'anime 3",
//         resume: "résumé de l'anime 3"
//     }
//     ];

//     return(
//         <>
//             <Header/>
//                 <main>
//                     <div>
//                         <h1>Titre de l'anime</h1>
//                             <div>
//                                 {fakeArticleAnime.map((articleAnime) => {
//                                     return(
//                                         <>
//                                             <h2>{articleAnime.title}</h2>
//                                             <p>{articleAnime.author}</p>
//                                             <p>{articleAnime.year}</p>
//                                             <p>{articleAnime.resume}</p>                        
//                                         </>
//                                     );
//                                 })}
//                             </div>
//                     </div>
//                 </main>
//             <Footer/>    
//         </>
//     );
// };

// export default ArticleAnime;