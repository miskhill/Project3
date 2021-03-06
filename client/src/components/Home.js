/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const Home = () => {

  // cool pictures and descript of the purpose

  return (
    <div className='bg' style={{
      backgroundImage: 'url(https://www.theloadout.com/wp-content/uploads/2020/09/league-of-legends-worlds-2020-shanghai.jpg)',
      height: '800px',
      backgroundRepeat: 'no-repeat',
    }} >
      <div>
        <h1 className='header'> 🔥 Fire 🔥 GCW E-Sports</h1>
      </div>
      <div>
        <h2>Catch up with the weeks hottest E-Sport Action</h2>
      </div>
      <section id="game-list" className="hl-games-list hl-item">
        <div className="hl-item-inner" >

          <div className="hl-games-list-item">
            <div className="img-bg">
              <img className="homeImages" src="https://smallcaps.com.au/wp-content/uploads/2019/03/Mogul-ASX-ESH-Legacy-AFL-Adelaide-Crows-eSports-team.jpg" alt="Game"></img>
            </div>
          </div>
  


          <div className="hl-games-list-item">
            <div className="img-bg">
              <img className="homeImages" src="https://cdn.imgbin.com/24/24/2/imgbin-league-of-legends-electronic-sports-legacy-esports-pty-limited-player-league-of-legends-e6g009zLZUBPBWg8B5uAigahK.jpg" alt="Game"></img>
            </div>


          </div>
          <div className="hl-games-list-item">
            <div className="img-bg">
              <img className="homeImages" src="https://www.pngfind.com/pngs/m/503-5039968_lgd-png-download-player-transparent-png.png" alt="Game"></img>
            </div>
  


          </div>
          <div className="hl-games-list-item">
            <div className="img-bg">
              <img className="homeImages" src="https://images.squarespace-cdn.com/content/v1/589bff0c414fb513e704c6e9/1633339929071-Y6VF294WJH8L5NP56W5M/IMG_7789.jpeg" alt="Game"></img>
            </div>

          </div>
        </div>

                    
        
      </section>
    </div>
  )
}

export default Home