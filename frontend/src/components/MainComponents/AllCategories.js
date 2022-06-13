import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const AllCategories = () => {

    return (
        <div className="listed-tags-section">
        <h1 className="main-title">All categories</h1>
            <div className="listed-tags">

             <Link to={`/feed/categories/Phase 1`}>
                    <p className="tag-item red">Phase 1</p>
                </Link>
                <Link to={`/feed/categories/Phase 2`}>
                    <p className="tag-item blue">Phase 2</p>
                </Link>
                <Link to={`/feed/categories/Phase 3`}>
                    <p className="tag-item green">Phase 3</p>
                </Link>
                <Link to={`/feed/categories/Phase 4`}>
                    <p className="tag-item red">Phase 4</p>
                </Link>
                <Link to={`/feed/categories/Iron Man`}>
                    <p className="tag-item red">Iron Man</p>
                </Link>
                <Link to={`/feed/categories/The Hulk`}>
                    <p className="tag-item red">The Hulk</p>
                </Link>
                <Link to={`/feed/categories/Thor`}>
                    <p className="tag-item red">Thor</p>
                </Link>
                <Link to={`/feed/categories/Asgardiens`}>
                    <p className="tag-item red">Asgardiens</p>
                </Link>
                <Link to={`/feed/categories/Loki`}>
                    <p className="tag-item red">Loki</p>
                </Link>
                <Link to={`/feed/categories/Captain America`}>
                    <p className="tag-item red">Captain America</p>
                </Link>
                <Link to={`/feed/categories/Avengers`}>
                    <p className="tag-item red">Avengers</p>
                </Link>
                <Link to={`/feed/categories/Black Widow`}>
                    <p className="tag-item red">Black Widow</p>
                </Link>
                <Link to={`/feed/categories/Falcon`}>
                    <p className="tag-item red">Falcon</p>
                </Link>
                <Link to={`/feed/categories/Guardians of the Galaxy`}>
                    <p className="tag-item red">Guardians of the Galaxy</p>
                </Link>
                <Link to={`/feed/categories/Ant-Man`}>
                    <p className="tag-item red">Ant-Man</p>
                </Link>
                <Link to={`/feed/categories/Falcon`}>
                    <p className="tag-item red">Falcon</p>
                </Link>
                <Link to={`/feed/categories/Doctor Strange`}>
                    <p className="tag-item red">Doctor Strange</p>
                </Link>
                <Link to={`/feed/categories/Spider-Man`}>
                    <p className="tag-item red">Spider-Man</p>
                </Link>
                <Link to={`/feed/categories/Black Panther`}>
                    <p className="tag-item red">Black Panther</p>
                </Link>
                <Link to={`/feed/categories/Shang-Chi`}>
                    <p className="tag-item red">Shang-Chi</p>
                </Link>
                <Link to={`/feed/categories/Eternals`}>
                    <p className="tag-item red">Eternals</p>
                </Link>
                <Link to={`/feed/categories/Scarlet Witch`}>
                    <p className="tag-item red">Scarlet Witch</p>
                </Link>
                <Link to={`/feed/categories/Upcoming`}>
                    <p className="tag-item red">Upcoming</p>
                </Link>
                <Link to={`/feed/categories/Animated`}>
                    <p className="tag-item red">Animated</p>
                </Link>
                <Link to={`/feed/categories/Hawkeye`}>
                    <p className="tag-item red">Hawkeye</p>
                </Link>
                <Link to={`/feed/categories/OneShot`}>
                    <p className="tag-item red">OneShot</p>
                </Link>
                <Link to={`/feed/categories/Documentary`}>
                    <p className="tag-item red">Documentary</p>
                </Link>
                <Link to={`/feed/categories/Deadpool`}>
                    <p className="tag-item red">"Deadpool</p>
                </Link>
                <Link to={`/feed/categories/Marvel Legacy`}>
                    <p className="tag-item red">Marvel Legacy</p>
                </Link>
                <Link to={`/feed/categories/Wolverine`}>
                    <p className="tag-item red">Wolverine</p>
                </Link>
                <Link to={`/feed/categories/X-Men`}>
                    <p className="tag-item red">X-Men</p>
                </Link>
                <Link to={`/feed/categories/Fantastic Four`}>
                    <p className="tag-item red">Fantastic Four</p>
                </Link>
                <Link to={`/feed/categories/S.H.I.E.L.D`}>
                    <p className="tag-item red">S.H.I.E.L.D</p>
                </Link>
                



            
            </div>

        </div>
    )
}

export default AllCategories