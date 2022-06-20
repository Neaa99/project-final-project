import React from "react";
import { Link } from 'react-router-dom'

import Header from "components/Headers/Header";


const AllTags = () => {

    return (
        <section>
            <Header />
            <div className="title-container">
                <h3 className="main-title">TAGS</h3>
            </div>
                        
                <div className="listed-tags">

                <Link to={`/feed/tags/Tony Stark`}>
                        <p className="tag-item tony red">Tony Stark</p>
                    </Link>
                    <Link to={`/feed/tags/Thor`}>
                        <p className="tag-item thor red">Thor</p>
                    </Link>
                    <Link to={`/feed/tags/Black Widow`}>
                        <p className="tag-item natasha red">Black Widow</p>
                    </Link>
                    <Link to={`/feed/tags/Hawkeye`}>
                        <p className="tag-item hawkeye red">Hawkeye</p>
                    </Link>
                    <Link to={`/feed/tags/S.H.I.E.L.D`}>
                        <p className="tag-item sheild red">S.H.I.E.L.D</p>
                    </Link>
                    <Link to={`/feed/tags/Nick Fury`}>
                        <p className="tag-item nick red">Nick Fury</p>
                    </Link>
                    <Link to={`/feed/tags/Peter Quill`}>
                        <p className="tag-item quill red">Peter Quill</p>
                    </Link>
                    <Link to={`/feed/tags/Groot`}>
                        <p className="tag-item groot red">Groot</p>
                    </Link>
                    <Link to={`/feed/tags/Loki`}>
                        <p className="tag-item loki red">Loki</p>
                    </Link>
                    <Link to={`/feed/tags/Pepper Potts`}>
                        <p className="tag-item pepper red">Pepper Potts</p>
                    </Link>
                    <Link to={`/feed/tags/Jarvis`}>
                        <p className="tag-item jarvis red">Vision</p>
                    </Link>
                    <Link to={`/feed/tags/Thanos`}>
                        <p className="tag-item thanos red">Thanos</p>
                    </Link>
                    <Link to={`/feed/tags/Rhodney`}>
                        <p className="tag-item rhodney red">Rhodney</p>
                    </Link>
                    <Link to={`/feed/tags/Bruce Banner`}>
                        <p className="tag-item hulk red">Bruce Banner</p>
                    </Link>
                    <Link to={`/feed/tags/Howard Stark`}>
                        <p className="tag-item howard red">Howard Stark</p>
                    </Link>
                    <Link to={`/feed/tags/Jane Foster`}>
                        <p className="tag-item foster red">Jane Foster</p>
                    </Link>
                    <Link to={`/feed/tags/Steve Rogers`}>
                        <p className="tag-item rogers red">Steve Rogers</p>
                    </Link>
                    <Link to={`/feed/tags/Bucky`}>
                        <p className="tag-item bucky red">Bucky</p>
                    </Link>
                    <Link to={`/feed/tags/Peggy Carter`}>
                        <p className="tag-item peggy red">Peggy Carter</p>
                    </Link>
                    <Link to={`/feed/tags/The Falcon`}>
                        <p className="tag-item falcon red">The Falcon</p>
                    </Link>
                    <Link to={`/feed/tags/Rocket Racoon`}>
                        <p className="tag-item rocket red">Rocket Racoon</p>
                    </Link>
                    <Link to={`/feed/tags/Gamora`}>
                        <p className="tag-item gamora red">Gamora</p>
                    </Link>
                    <Link to={`/feed/tags/Drax`}>
                        <p className="tag-item drax red">Drax</p>
                    </Link>
                    <Link to={`/feed/tags/Nebula`}>
                        <p className="tag-item nebula red">Nebula</p>
                    </Link>
                    <Link to={`/feed/tags/Yondu`}>
                        <p className="tag-item yondu red">Yondu</p>
                    </Link>
                    <Link to={`/feed/tags/Wanda`}>
                        <p className="tag-item wanda red">Wanda</p>
                    </Link>
                    <Link to={`/feed/tags/F.R.I.D.A.Y.`}>
                        <p className="tag-item friday red">F.R.I.D.A.Y.</p>
                    </Link>
                    <Link to={`/feed/tags/Ant-Man`}>
                        <p className="tag-item antman red">Ant-Man</p>
                    </Link>
                    <Link to={`/feed/tags/T'Challa`}>
                        <p className="tag-item panther red">T'Challa</p>
                    </Link>
                    <Link to={`/feed/tags/Peter Parker`}>
                        <p className="tag-item spider red">Peter Parker</p>
                    </Link>
                    <Link to={`/feed/tags/Stephen Strange`}>
                        <p className="tag-item strange red">Stephen Strange</p>
                    </Link>
                    <Link to={`/feed/tags/Wong`}>
                        <p className="tag-item wong red">Wong</p>
                    </Link>
                    <Link to={`/feed/tags/MJ`}>
                        <p className="tag-item mj red">MJ</p>
                    </Link>
                    <Link to={`/feed/tags/Ned Leeds`}>
                        <p className="tag-item ned red">Ned Leeds</p>
                    </Link>
                    <Link to={`/feed/tags/Happy`}>
                        <p className="tag-item happy red">Happy</p>
                    </Link>
                    <Link to={`/feed/tags/Valkyrie`}>
                        <p className="tag-item valkyrie red">Valkyrie</p>
                    </Link>
                    <Link to={`/feed/tags/Shuri`}>
                        <p className="tag-item shuri red">Shuri</p>
                    </Link>
                    <Link to={`/feed/tags/The Wasp`}>
                        <p className="tag-item wasp red">The Wasp</p>
                    </Link>
                    <Link to={`/feed/tags/Captain Marvel`}>
                        <p className="tag-item capMarvel red">Captain Marvel</p>
                    </Link>
                    <Link to={`/feed/tags/Flash`}>
                        <p className="tag-item flash red">Flash</p>
                    </Link>
                    <Link to={`/feed/tags/Shang-Chi`}>
                        <p className="tag-item shang red">Shang-Chi</p>
                    </Link>
                    <Link to={`/feed/tags/Eternals`}>
                        <p className="tag-item eternals red">Eternals</p>
                    </Link>
                    <Link to={`/feed/tags/Venom`}>
                        <p className="tag-item venom red">Venom</p>
                    </Link>
                    <Link to={`/feed/tags/Electro`}>
                        <p className="tag-item electro red">Electro</p>
                    </Link>
                    <Link to={`/feed/tags/Doctor Octopus`}>
                        <p className="tag-item octopus red">Doctor Octopus</p>
                    </Link>
                    <Link to={`/feed/tags/Charles Xavier`}>
                        <p className="tag-item xavier red">Charles Xavier</p>
                    </Link>
                    <Link to={`/feed/tags/Fantastic Four`}>
                        <p className="tag-item four red">Fantastic Four</p>
                    </Link>
                    <Link to={`/feed/tags/Riri Williams`}>
                        <p className="tag-item riri red">Riri Williams</p>
                    </Link>
                    <Link to={`/feed/tags/Mantis`}>
                        <p className="tag-item mantis red">Mantis</p>
                    </Link>
                    <Link to={`/feed/tags/Ms. Marvel`}>
                        <p className="tag-item msMarvel red">Ms. Marvel</p>
                    </Link>
                    <Link to={`/feed/tags/Echo`}>
                        <p className="tag-item echo red">Echo</p>
                    </Link>
                    <Link to={`/feed/tags/Moon Knight`}>
                        <p className="tag-item moonknight red">Moon Knight</p>
                    </Link>
                    <Link to={`/feed/tags/Deadpool`}>
                        <p className="tag-item deadpool red">Deadpool</p>
                    </Link>
                    <Link to={`/feed/tags/Logan`}>
                        <p className="tag-item wolf red">Logan</p>
                    </Link>
                    <Link to={`/feed/tags/Phoenix`}>
                        <p className="tag-item phoenix red">Phoenix</p>
                    </Link>
                    <Link to={`/feed/tags/Magneto`}>
                        <p className="tag-item magneto red">Magneto</p>
                    </Link>
                    <Link to={`/feed/tags/Scott Summers`}>
                        <p className="tag-item summers red">Scott Summers</p>
                    </Link>
                    <Link to={`/feed/tags/Rouge`}>
                        <p className="tag-item rouge red">Rogue</p>
                    </Link>
                    <Link to={`/feed/tags/Mystique`}>
                        <p className="tag-item mystique red">Mystique</p>
                    </Link>
                    <Link to={`/feed/tags/Mr. Fantastic`}>
                        <p className="tag-item fantastic red">Mr. Fantastic</p>
                    </Link>
                    <Link to={`/feed/tags/Invisible Women`}>
                        <p className="tag-item invisible red">Invisible Women</p>
                    </Link>
                    <Link to={`/feed/tags/Human Torch`}>
                        <p className="tag-item torch red">Human Torch</p>
                    </Link>
                    <Link to={`/feed/tags/The Thing`}>
                        <p className="tag-item thing red">The Thing</p>
                    </Link>
                    <Link to={`/feed/tags/Dr. Doom`}>
                        <p className="tag-item doom red">Dr. Doom</p>
                    </Link>
                    <Link to={`/feed/tags/Green Goblin`}>
                        <p className="tag-item goblin red">Green Goblin</p>
                    </Link>
                    <Link to={`/feed/tags/Gwen Stacy`}>
                        <p className="tag-item gwen red">Gwen Stacy</p>
                    </Link>
                    <Link to={`/feed/tags/Blade`}>
                        <p className="tag-item blade red">Blade</p>
                    </Link>
                    <Link to={`/feed/tags/Morbius`}>
                        <p className="tag-item morbius red">Morbius</p>
                    </Link>
                    <Link to={`/feed/tags/M.O.D.O.K.`}>
                        <p className="tag-item modok red">M.O.D.O.K.</p>
                    </Link>
                    <Link to={`/feed/tags/Hit-Monkey`}>
                        <p className="tag-item monkey red">Hit-Monkey</p>
                    </Link>
                    <Link to={`/feed/tags/Miles Morales`}>
                        <p className="tag-item miles red">Miles Morales</p>
                    </Link>
                



                
                </div>

           
        </section>
    )
}

export default AllTags