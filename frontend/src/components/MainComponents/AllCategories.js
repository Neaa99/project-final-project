import React from 'react'
import { Link } from 'react-router-dom'

import Header from 'components/Headers/Header'
import TopScroll from 'components/Headers/TopScroll'
import Footer from './Footer'

import data from './category-data.json'

const AllCategories = () => {

    return (
        <>
            <Header title="CATEGORIES"/>

            <div className="topscroll">
                <TopScroll />
            </div>

            <div className="listed-tags">

                {data &&
                    data.map(({ title, classname}) => (
                        <Link to={`/feed/categories/${title}`}>
                            <p className={`tag-item red ${classname}`}>{title}</p>
                        </Link>
                    ))}

            <section>
            {/* <Link to={`/feed/categories/Phase 1`}>
                    <p className="tag-item phase red">Phase 1</p>
                </Link>
                <Link to={`/feed/categories/Phase 2`}>
                    <p className="tag-item phase red">Phase 2</p>
                </Link>
                <Link to={`/feed/categories/Phase 3`}>
                    <p className="tag-item phase red">Phase 3</p>
                </Link>
                <Link to={`/feed/categories/Phase 4`}>
                    <p className="tag-item phase red">Phase 4</p>
                </Link>
                <Link to={`/feed/categories/Phase 5`}>
                    <p className="tag-item phase red">Phase 5</p>
                </Link>
                <Link to={`/feed/categories/Phase 6`}>
                    <p className="tag-item phase red">Phase 6</p>
                </Link>
                <Link to={`/feed/categories/Iron Man`}>
                    <p className="tag-item tony red">Iron Man</p>
                </Link>
                <Link to={`/feed/categories/The Hulk`}>
                    <p className="tag-item hulk red">The Hulk</p>
                </Link>
                <Link to={`/feed/categories/Thor`}>
                    <p className="tag-item thor red">Thor</p>
                </Link>
                <Link to={`/feed/categories/Asgardiens`}>
                    <p className="tag-item asgardien red">Asgardiens</p>
                </Link>
                <Link to={`/feed/categories/Loki`}>
                    <p className="tag-item loki red">Loki</p>
                </Link>
                <Link to={`/feed/categories/Captain America`}>
                    <p className="tag-item rogers red">Captain America</p>
                </Link>
                <Link to={`/feed/categories/Avengers`}>
                    <p className="tag-item avengers red">Avengers</p>
                </Link>
                <Link to={`/feed/categories/Black Widow`}>
                    <p className="tag-item natasha red">Black Widow</p>
                </Link>
                <Link to={`/feed/categories/Falcon`}>
                    <p className="tag-item falcon red">Falcon</p>
                </Link>
                <Link to={`/feed/categories/Guardians of the Galaxy`}>
                    <p className="tag-item galaxy red">Guardians of the Galaxy</p>
                </Link>
                <Link to={`/feed/categories/Ant-Man`}>
                    <p className="tag-item antman red">Ant-Man</p>
                </Link>
                <Link to={`/feed/categories/Doctor Strange`}>
                    <p className="tag-item strange red">Doctor Strange</p>
                </Link>
                <Link to={`/feed/categories/Spider-Man`}>
                    <p className="tag-item spider red">Spider-Man</p>
                </Link>
                <Link to={`/feed/categories/Black Panther`}>
                    <p className="tag-item panther red">Black Panther</p>
                </Link>
                <Link to={`/feed/categories/Shang-Chi`}>
                    <p className="tag-item shang red">Shang-Chi</p>
                </Link>
                <Link to={`/feed/categories/Eternals`}>
                    <p className="tag-item eternals red">Eternals</p>
                </Link>
                <Link to={`/feed/categories/Scarlet Witch`}>
                    <p className="tag-item wanda red">Scarlet Witch</p>
                </Link>
                <Link to={`/feed/categories/Upcoming`}>
                    <p className="tag-item upcoming red">Upcoming</p>
                </Link>
                <Link to={`/feed/categories/Animated`}>
                    <p className="tag-item animated red">Animated</p>
                </Link>
                <Link to={`/feed/categories/Captain Marvel`}>
                    <p className="tag-item capMarvel red">Captain Marvel</p>
                </Link>
                <Link to={`/feed/categories/Hawkeye`}>
                    <p className="tag-item hawkeye red">Hawkeye</p>
                </Link>
                <Link to={`/feed/categories/OneShot`}>
                    <p className="tag-item oneshot red">OneShot</p>
                </Link>
                <Link to={`/feed/categories/Documentary`}>
                    <p className="tag-item doc red">Documentary</p>
                </Link>
                <Link to={`/feed/categories/Deadpool`}>
                    <p className="tag-item deadpool red">Deadpool</p>
                </Link>
                <Link to={`/feed/categories/Marvel Legacy`}>
                    <p className="tag-item legacy red">Marvel Legacy</p>
                </Link>
                <Link to={`/feed/categories/Wolverine`}>
                    <p className="tag-item wolf red">Wolverine</p>
                </Link>
                <Link to={`/feed/categories/X-Men`}>
                    <p className="tag-item xmen red">X-Men</p>
                </Link>
                <Link to={`/feed/categories/Fantastic Four`}>
                    <p className="tag-item four red">Fantastic Four</p>
                </Link>
                <Link to={`/feed/categories/S.H.I.E.L.D`}>
                    <p className="tag-item sheild red">S.H.I.E.L.D</p>
                </Link> */}
            </section>
            
                
            </div>
            <Footer />
        </>
    )
}

export default AllCategories