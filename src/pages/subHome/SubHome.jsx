import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import PlantsDetails from "../../../planetsJsonDetails";
import Navbar from "../../component/layout/Navbar";
import Earth from "../../component/planets/earch";
import Jupiter from "../../component/planets/Jupiter";
import Mars from "../../component/planets/Mars";
import Mercury from "../../component/planets/Mercury";
import Moon from "../../component/planets/moon";
import Neptune from "../../component/planets/neptune";
import Saturn from "../../component/planets/Saturn";
import Sun from "../../component/planets/Sun";
import Uranus from "../../component/planets/Uranus";
import Venus from "../../component/planets/venus";
import "./HomeIndex.css";
const SubHome = () => {
  const [state, setState] = useState(4);
  const [dataItem, setDataItem] = useState(null);
  useEffect(() => {
    const data = PlantsDetails.filter((ele) => {
      return ele.id === state;
    });
    setDataItem(data);
  }, [state]);
  let imageForPlanets = () => {
    if (dataItem[0].id === 1) {
      return <Mercury />;
    } else if (dataItem[0].id === 2) {
      return <Venus />;
    } else if (dataItem[0].id === 3) {
      return <Earth />;
    } else if (dataItem[0].id === 4) {
      return <Mars />;
    } else if (dataItem[0].id === 5) {
      return <Jupiter />;
    } else if (dataItem[0].id === 6) {
      return <Saturn />;
    } else if (dataItem[0].id === 7) {
      return <Uranus />;
    } else if (dataItem[0].id === 8) {
      return <Neptune />;
    } else if (dataItem[0].id === 9) {
      return <Moon />;
    }
  };

  let detailsForPlanets = () => {
    if (dataItem[0].id === 1) {
      return (
        <div id="mercury-info">
          <div className="planet-info-grid">
            <div className="facts">
              <div className="fact-count">1</div>
              <h4>FASTEST PLANET</h4>
              <p>
                Mercury is the fastest planet in our solar system - traveling
                through space at nearly 29 miles (47 kilometers) per second. The
                closer a planet is to the Sun, the faster it travels. Since
                Mercury is the fastest planet and has the shortest distance to
                travel around the Sun, it has the shortest year of all the
                planets in our solar system - 88 days.
              </p>
            </div>
            <div className="fact-image">
              <img src="/images/mercury1.jpg" />
            </div>
            <div className="fact-image">
              <img src="/images/mercury2.jpg" />
            </div>
            <div className="facts" id="fact2">
              <div className="fact-count">2</div>
              <h4>ROUGH SURFACE</h4>
              <p>
                Mercury is a rocky planet, also known as a terrestrial planet.
                Mercury has a solid, cratered surface, much like the Earth's
                moon.
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">3</div>
              <h4>THIN ATMOSPHERE</h4>
              <p>
                Mercury's thin atmosphere, or exosphere, is composed mostly of
                oxygen (O2), sodium (Na), hydrogen (H2), helium (He), and
                potassium (K).
              </p>
            </div>
            <div className="fact-image">
              <img src="/images/mercury3.jpg" />
            </div>
            <div className="fact-image">
              <img src="/images/mercury4.jpeg" />
            </div>
            <div className="facts">
              <div className="fact-count">4</div>
              <h4>BIG SUN</h4>
              <p>
                Standing on Mercury's surface at its closest approach to the
                Sun, our star would appear more than three times larger than it
                does on Earth.
              </p>
            </div>
          </div>
        </div>
      );
    } else if (dataItem[0].id === 2) {
      return (
        <div id="venus-info">
          <div className="planet-info-grid">
            <div className="facts">
              <div className="fact-count">1</div>
              <h4>TOXIC TWIN</h4>
              <p>
                Venus is often called "Earth’s twin" because they’re similar in
                size and structure, but Venus has extreme surface heat and a
                dense, toxic atmosphere. If the Sun were as tall as a typical
                front door, Earth and Venus would each be about the size of a
                nickel.
              </p>
            </div>
            <div className="fact-image">
              <img src="/images/venus1.jfif" />
            </div>
            <div className="fact-image">
              <img src="/images/venus2.png" />
            </div>
            <div className="facts" id="fact2">
              <div className="fact-count">2</div>
              <h4>LONG DAYS, SHORT YEARS</h4>
              <p>
                Venus rotates very slowly on its axis – one day on Venus lasts
                243 Earth days. The planet orbits the Sun faster than Earth,
                however, so one year on Venus takes only about 225 Earth days,
                making a Venusian day longer than its year!
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">3</div>
              <h4>DIVERSE TERRAIN</h4>
              <p>
                Venus has a solid surface covered in dome-like volcanoes, rifts,
                and mountains, with expansive volcanic plains and vast, ridged
                plateaus.
              </p>
            </div>
            <div className="fact-image">
              <img src="/images/venus3.jpg" />
            </div>
            <div className="fact-image">
              <img src="/images/venus4.jpg" />
            </div>
            <div className="facts">
              <div className="fact-count">4</div>
              <h4>RUNAWAY GREENHOUSE</h4>
              <p>
                Venus’ thick atmosphere traps heat creating a runaway greenhouse
                effect – making it the hottest planet in our solar system with
                surface temperatures hot enough to melt lead. The greenhouse
                effect makes Venus roughly 700°F (390°C) hotter than it would be
                without a greenhouse effect.
              </p>
            </div>
          </div>
        </div>
      );
    } else if (dataItem[0].id === 3) {
      return (
        <div id="earth-info">
          <div className="planet-info-grid">
            <div className="fact-image">
              <img src="/images/earth2.png" />
            </div>
            <div className="facts" id="fact2">
              <div className="fact-count">1</div>
              <h4>SQUASHED SPHERE</h4>
              <p>
                As it spins, gravity points toward the center of our planet, and
                a centrifugal force pushes outward. But since this
                gravity-opposing force acts perpendicular to the axis of Earth,
                and it's axis is tilted, centrifugal force at the equator is not
                opposed to gravity.
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">2</div>
              <h4>GRAVITY ISN'T UNIFORM</h4>
              <p>
                If Earth were a perfect sphere, its gravitational field would be
                the same everywhere. But in reality, the planet's surface is
                bumpy, and water flow, ice drift and the movement of the
                tectonic plates beneath Earth's crust all change the pull of
                gravity.
              </p>
            </div>
            <div className="fact-image">
              <img src="/images/earth3.png" />
            </div>
            <div className="fact-image">
              <img src="/images/earth4.png" />
            </div>
            <div className="facts">
              <div className="fact-count">3</div>
              <h4>EARTH USED TO BE PURPLE</h4>
              <p>
                Scientists believe that ancient microbes might have used a
                molecule other than chlorophyll to harness the sun's rays, which
                gave the organisms a violet hue.
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">4</div>
              <h4>PLANET WITH TECTONIC PLATES</h4>
              <p>
                The outer crust of the Earth has multiple regions called
                tectonic plates.Beneath that is a magma interior which causes
                the plates to move,crashing into one another.
              </p>
            </div>

            <div className="fact-image">
              <img src="/images/earth1.jpg" />
            </div>
          </div>
        </div>
      );
    } else if (dataItem[0].id === 4) {
      return (
        <div id="mars-info">
          <div className="planet-info-grid">
            <div className="fact-image">
              <img src="/images/mars1.png" />
            </div>
            <div className="facts" id="fact2">
              <div className="fact-count">1</div>
              <h4>RUGGED TERRAIN</h4>
              <p>
                Mars is a rocky planet. Its solid surface has been altered by
                volcanoes, impacts, winds, crustal movement and chemical
                reactions.
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">2</div>
              <h4>BRING A SPACESUIT</h4>
              <p>
                Mars has a thin atmosphere made up mostly of carbon dioxide
                (CO2), argon (Ar), nitrogen (N2), and a small amount of oxygen
                and water vapor.
              </p>
            </div>
            <div className="fact-image">
              <img src="/images/mars2.png" />
            </div>
            <div className="fact-image">
              <img src="/images/mars3.jpg" />
            </div>
            <div className="facts">
              <div className="fact-count">3</div>
              <h4>MANY MISSIONS</h4>
              <p>
                Several missions have visited this planet, from flybys and
                orbiters to rovers on the surface.The first true Mars mission
                success was the Mariner 4 flyby in 1965.
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">4</div>
              <h4>RUSTY PLANET</h4>
              <p>
                Mars is known as the Red Planet because iron minerals in the
                Martian soil oxidize, or rust, causing the soil and atmosphere
                to look red.
              </p>
            </div>

            <div className="fact-image">
              <img src="/images/mars4.jpg" />
            </div>
          </div>
        </div>
      );
    } else if (dataItem[0].id === 5) {
      return (
        <div id="jupiter-info">
          <div className="planet-info-grid">
            <div className="fact-image">
              <img src="/images/jupiter1.jpg" />
            </div>
            <div className="facts" id="fact2">
              <div className="fact-count">1</div>
              <h4>SUPER STORM</h4>
              <p>
                Jupiter's Great Red Spot is a gigantic storm that’s about twice
                the size of Earth and has raged for over a century.
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">2</div>
              <h4>MASSIVE WORLD, LIGHT ELEMENTS</h4>
              <p>
                Jupiter's atmosphere is made up mostly of hydrogen (H2) and
                helium (He).
              </p>
            </div>
            <div className="fact-image">
              <img src="/images/jupiter2.jpg" />
            </div>
            <div className="fact-image">
              <img src="/images/jupiter3.jpg" />
            </div>
            <div className="facts">
              <div className="fact-count">3</div>
              <h4>WHAT'S INSIDE</h4>
              <p>
                Jupiter is a gas giant and so lacks an Earth-like surface. If it
                has a solid inner core at all, it’s likely only about the size
                of Earth.
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">4</div>
              <h4>EXPLORING JUPITER</h4>
              <p>
                Nine spacecraft have visited Jupiter. Seven flew by and two have
                orbited the gas giant. Juno, the most recent, arrived at Jupiter
                in 2016.
              </p>
            </div>

            <div className="fact-image">
              <img src="/images/jupiter4.jpg" />
            </div>
          </div>
        </div>
      );
    } else if (dataItem[0].id === 6) {
      return (
        <div id="saturn-info">
          <div className="planet-info-grid">
            <div className="fact-image">
              <img src="/images/saturn4.jpg" />
            </div>
            <div className="facts" id="fact2">
              <div className="fact-count">1</div>
              <h4>HOT AIR</h4>
              <p>
                Saturn's atmosphere is made up mostly of hydrogen (H2) and
                helium (He).
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">2</div>
              <h4>RARE DESTINATION</h4>
              <p>
                Few missions have visited Saturn: Pioneer 11 and Voyagers 1 and
                2 flew by; But Cassini orbited Saturn 294 times from 2004 to
                2017.
              </p>
            </div>
            <div className="fact-image">
              <img src="/images/saturn2.jpg" />
            </div>
            <div className="fact-image">
              <img src="/images/saturn1.png" />
            </div>
            <div className="facts">
              <div className="fact-count">3</div>
              <h4>SHORT DAY, LONG YEAR</h4>
              <p>
                Saturn takes about 10.7 hours (no one knows precisely) to rotate
                on its axis once—a Saturn “day”—and 29 Earth years to orbit the
                sun.
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">4</div>
              <h4>ADD A DASH OF EARTH</h4>
              <p>
                About two tons of Saturn’s mass came from Earth—the Cassini
                spacecraft was intentionally vaporized in Saturn’s atmosphere in
                2017.
              </p>
            </div>

            <div className="fact-image">
              <img src="/images/saturn3.jpg" />
            </div>
          </div>
        </div>
      );
    } else if (dataItem[0].id === 7) {
      return (
        <div id="uranus-info">
          <div className="planet-info-grid">
            <div className="fact-image">
              <img src="/images/uranus1.png" />
            </div>
            <div className="facts" id="fact2">
              <div className="fact-count">1</div>
              <h4>GASSY</h4>
              <p>
                Uranus has an atmosphere made mostly of molecular hydrogen and
                atomic helium, with a small amount of methane.
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">2</div>
              <h4>A BIT LONELY</h4>
              <p>
                Voyager 2 is the only spacecraft to fly by Uranus. No spacecraft
                has orbited this distant planet to study it at length and up
                close.
              </p>
            </div>
            <div className="fact-image">
              <img src="/images/uranus4.jpg" />
            </div>
            <div className="fact-image">
              <img src="/images/uranus2.png" />
            </div>
            <div className="facts">
              <div className="fact-count">3</div>
              <h4>SHORT-ISH DAY, LONGISH YEAR</h4>
              <p>
                Uranus takes about 17 hours to rotate once (a Uranian day), and
                about 84 Earth years to complete an orbit of the Sun (a Uranian
                year).
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">4</div>
              <h4>ONE COOL FACT</h4>
              <p>
                Like Venus, Uranus rotates east to west. But Uranus is unique in
                that it rotates on its side.
              </p>
            </div>

            <div className="fact-image">
              <img src="/images/uranus3.png" />
            </div>
          </div>
        </div>
      );
    } else if (dataItem[0].id === 8) {
      return (
        <div className="" id="neptune-info">
          <div className="planet-info-grid">
            <div className="fact-image">
              <img src="/images/neptune1.jpg" />
            </div>
            <div className="facts" id="fact2">
              <div className="fact-count">1</div>
              <h4>GASSY</h4>
              <p>
                Neptune's atmosphere is made up mostly of molecular hydrogen,
                atomic helium and methane.
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">2</div>
              <h4>ONE VOYAGE THERE</h4>
              <p>
                Voyager 2 is the only spacecraft to have visited Neptune. No
                spacecraft has orbited this distant planet to study it at length
                and up close.
              </p>
            </div>
            <div className="fact-image">
              <img src="/images/neptune2.png" />
            </div>
            <div className="fact-image">
              <img src="/images/neptune3.jpg" />
            </div>
            <div className="facts">
              <div className="fact-count">3</div>
              <h4>FAINT RINGS</h4>
              <p>
                Neptune has at least five main rings and four more ring arcs,
                which are clumps of dust and debris likely formed by the gravity
                of a nearby moon.
              </p>
            </div>
            <div className="facts">
              <div className="fact-count">4</div>
              <h4>ONE COOL FACT</h4>
              <p>
                Because of dwarf planet Pluto’s elliptical orbit, Pluto is
                sometimes closer to the Sun (and us) than Neptune is.
              </p>
            </div>

            <div className="fact-image">
              <img src="/images/neptune4.jpg" />
            </div>
          </div>
        </div>
      );
    } else if (dataItem[0].id === 9) {
      return null;
    } else {
      return <div>ss</div>;
    }
  };
  const managePlanetState = (planetNumber) => {
    return setState(planetNumber);
  };
  // ---------------------------------------------------------------------------------
  return (
    <div>
      <div>
        <Navbar dataPlanets={managePlanetState} />
      </div>
      <div className="sub-header" id="home">
        <div className="carousel" id="planet-carousel">
          {state == 1 ? null : (
            <a className="prev" onClick={() => setState(state - 1)}>
              &#10094;
            </a>
          )}
          {state == 7 ? null : (
            <a className="next" onClick={() => setState(state + 1)}>
              &#10095;
            </a>
          )}
          {dataItem !== null ? (
            <div className="slide">
              <div className="description slideUp">
                <h2 style={{ fontSize: "4rem" }} className="title">
                  {dataItem[0].title}
                </h2>
                <h3
                  style={{ fontSize: "2rem" }}
                  className="sub-title fw-300 text-yellow"
                >
                  {dataItem[0].subTitle}
                </h3>
                <p
                  style={{ fontSize: "300", lineHeight: "30px" }}
                  className="content"
                >
                  {dataItem[0].desc}
                </p>

                <button className="learn-more-btn">Learn More</button>
              </div>
              <div className="stage" style={{ height: "73%" }}>
                <figure>
                  <Canvas style={{ height: "600px" }}>
                    {imageForPlanets()}
                  </Canvas>
                </figure>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div style={{ backgroundColor: "#000" }}>
        <section className="solar-system-container" id="solar-system">
          <div className="blob">Hover</div>
          <div className="solar-system">
            <div className="orbit-lines mercury-line"></div>
            <div className="orbit-lines venus-line"></div>
            <div className="orbit-lines earth-line"></div>
            <div className="orbit-lines mars-line"></div>
            <div className="orbit-lines jupiter-line"></div>
            <div className="orbit-lines saturn-line"></div>
            <div className="orbit-lines uranus-line"></div>
            <div className="orbit-lines neptune-line"></div>

            <div className="solar-side-card flex-center" id="solarSideCard">
              <div className="solar-side-info" id="sideInfoSun">
                <div className="solar-header-container">
                  <div className="close-button">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <h3>
                    Sun <span className="text-yellow">Facts</span>
                  </h3>
                </div>

                <div className="side-points">
                  <div className="fact-count">1</div>
                  <p>
                    The energy created by the Sun’s core is nuclear fusion. This
                    huge amount of energy is produced when four hydrogen nuclei
                    are combined into one helium nucleus.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">2</div>
                  <p>
                    The Sun is halfway through its life. At 4.5 billion years
                    old, the Sun has burned off around half of its hydrogen
                    stores and has enough left to continue burning hydrogen for
                    another 5 billion years. Currently the Sun is a yellow dwarf
                    star.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">3</div>
                  <p>
                    The Sun rotates in the opposite direction to Earth with the
                    Sun rotating from west to east instead of east to west like
                    Earth.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">4</div>
                  <p>
                    The Sun has a powerful magnetic field. When magnetic energy
                    is released by the Sun during magnetic storms, solar flares
                    occur which we see on Earth as sunspots. Sunspots are dark
                    areas on the Sun’s surface caused by magnetic variations.
                  </p>
                </div>
              </div>

              <div className="solar-side-info hidden" id="sideInfoMercury">
                <div className="solar-header-container">
                  <div className="close-button">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <h3>
                    Mercury <span className="text-yellow">Facts</span>
                  </h3>
                </div>

                <div className="side-points">
                  <div className="fact-count">1</div>
                  <p>
                    After the Earth, Mercury is the second densest planet.
                    Despite its small size, Mercury is very dense because it is
                    composed mainly of heavy metals and rock.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">2</div>
                  <p>
                    Mercury is named after the messenger of the Roman gods, who
                    is also known as Hermes in Greek mythology. This is because
                    of the speed in which Mercury orbits the Sun and the speed
                    with which Mercury the Roman deity was able to deliver
                    messages.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">3</div>
                  <p>
                    It was once believed that a planet called Vulcan existed
                    between the orbit of Mercury and the Sun – however the
                    existence of such a planet was never found.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">4</div>
                  <p>
                    Mercury is the only planet which doesn’t rotate exactly once
                    every year – instead rotating three times for every two
                    orbits of the Sun. This is because it is nearly tidally
                    locked to the Sun.
                  </p>
                </div>
              </div>

              <div className="solar-side-info hidden" id="sideInfoVenus">
                <div className="solar-header-container">
                  <div className="close-button">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <h3>
                    Venus <span className="text-yellow">Facts</span>
                  </h3>
                </div>

                <div className="side-points">
                  <div className="fact-count">1</div>
                  <p>
                    One day on Venus is longer than one year. Due to the slow
                    rotation on its axis, it takes 243 Earth-days to complete
                    one rotation. The orbit of the planet takes 225 Earth-days –
                    making a year on Venus shorter on day on Venus.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">2</div>
                  <p>
                    The temperature on Venus doesn’t vary much between the night
                    and day. This is due to the slow movement of the solar winds
                    across the surface of the planet.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">3</div>
                  <p>
                    Venus has a very weak magnetic field. This surprised
                    scientists, who expected Venus to have a magnetic field
                    similar in strength to Earth’s. One possible reason for this
                    is that Venus has no solid inner core, or that its core is
                    not cooling.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">4</div>
                  <p>
                    Venus orbits the sun in an ellipse, but its orbit is the
                    closest to being a circle out of all the planets in the
                    Solar System.
                  </p>
                </div>
              </div>

              <div className="solar-side-info hidden" id="sideInfoEarth">
                <div className="solar-header-container">
                  <div className="close-button">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <h3>
                    Earth <span className="text-yellow">Facts</span>
                  </h3>
                </div>

                <div className="side-points">
                  <div className="fact-count">1</div>
                  <p>
                    The Earth was once believed to be the centre of the
                    universe. For 2000 years ancient astronomers believed that
                    the Earth was static and had other celestial bodies
                    travelling in circular orbits around it.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">2</div>
                  <p>
                    Earth’s water was initially trapped within the planet. Over
                    time the Earth’s water was brought to the surface by the
                    planet’s volcanic activity.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">3</div>
                  <p>
                    The highest point found on Earth is Mount Everest which
                    reaches a height of 8.8 km.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">4</div>
                  <p>
                    The lowest point on Earth is called Challenger Deep and at
                    10.9 km below sea level, it is further than the peak of
                    Mount Everest.
                  </p>
                </div>
              </div>

              <div className="solar-side-info hidden" id="sideInfoMars">
                <div className="solar-header-container">
                  <div className="close-button">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <h3>
                    Mars <span className="text-yellow">Facts</span>
                  </h3>
                </div>

                <div className="side-points">
                  <div className="fact-count">1</div>
                  <p>
                    Mars is the only other planet besides Earth that has polar
                    ice caps. The northern cap is called the Planum Boreum, with
                    Planum Australe in the south. Water ice has also been found
                    under the Martian ice caps.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">2</div>
                  <p>
                    Mars has seasons like Earth, but they last twice as long.
                    This is because Mars is tilted on its axis by about 25.19
                    degrees, which is similar to the axial tilt of the Earth
                    (22.5 degrees).
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">3</div>
                  <p>
                    Mars does not have a magnetic field – although there are
                    some scientists that believe it did have a magnetic field
                    somewhere around 4 billion years ago.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">4</div>
                  <p>
                    The orbit of Mars is the most eccentric of the eight
                    planets. This means it is the least circular orbit path of
                    the planets.
                  </p>
                </div>
              </div>

              <div className="solar-side-info hidden" id="sideInfoJupiter">
                <div className="solar-header-container">
                  <div className="close-button">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <h3>
                    Jupiter <span className="text-yellow">Facts</span>
                  </h3>
                </div>

                <div className="side-points">
                  <div className="fact-count">1</div>
                  <p>
                    Jupiter has the shortest day of the eight planets. The
                    planet rotates very Jupiter rotates very quickly, turning on
                    its axis once every 9 hours and 55 minutes. This rapid
                    rotation is also what causes the flattening effect of the
                    planet, which is why it has an oblate shape.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">2</div>
                  <p>
                    Jupiter has a very unique cloud layer. The upper atmosphere
                    of the planet is divided into zones and cloud belts which
                    are made of ammonia crystals, sulfur and a mixture of these
                    two compounds.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">3</div>
                  <p>
                    If Jupiter had become 80 times more massive, nuclear fusion
                    would have occurred in its core. Had that happened, it would
                    have become a star instead of a planet.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">4</div>
                  <p>
                    Jupiter does not experience seasons like other planets such
                    as Earth and Mars. This is because the axis is only tilted
                    by 3.13 degrees.
                  </p>
                </div>
              </div>

              <div className="solar-side-info hidden" id="sideInfoSaturn">
                <div className="solar-header-container">
                  <div className="close-button">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <h3>
                    Saturn <span className="text-yellow">Facts</span>
                  </h3>
                </div>

                <div className="side-points">
                  <div className="fact-count">1</div>
                  <p>
                    In Roman mythology Saturn was the father of Jupiter, king of
                    the gods. This relationship makes sense given that the
                    planets Saturn and Jupiter are similar in so many respects,
                    including size and composition. The Greek counterpart is
                    known as Cronus.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">2</div>
                  <p>
                    Saturn gives off more energy than it receives from the Sun.
                    This unusual quality is believed to be generated from the
                    gravitational compression of the planet combined with the
                    friction from large amount of helium found within its
                    atmosphere.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">3</div>
                  <p>
                    Saturn has the fastest winds of any other planet in our
                    solar system. These winds have been measured at
                    approximately 1,800 km per hour
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">4</div>
                  <p>
                    Saturn is the flattest of the eight planets. With a polar
                    diameter that is 90% of its equatorial diameter, Saturn is
                    the flattest of all the planets.
                  </p>
                </div>
              </div>

              <div className="solar-side-info hidden" id="sideInfoUranus">
                <div className="solar-header-container">
                  <div className="close-button">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <h3>
                    Uranus <span className="text-yellow">Facts</span>
                  </h3>
                </div>

                <div className="side-points">
                  <div className="fact-count">1</div>
                  <p>
                    Uranus rotates on its axis once every 17 hours and 14
                    minutes. Like Venus, it turns in a retrograde direction
                    which is opposite to the direction Earth and the other six
                    planets turn.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">2</div>
                  <p>
                    A collision may have caused the unusual tilt of Uranus. The
                    theory is that an Earth-sized planet may have collided with
                    Uranus which forced its axis to drastically shift.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">3</div>
                  <p>
                    The mass of Uranus is about 14.5 times the mass of Earth,
                    making it the lightest of the four gas giants of the outer
                    solar system.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">4</div>
                  <p>
                    The Voyager 2 is the only spacecraft to have flown by
                    Uranus. This happened in 1986 and it flew past the planet at
                    a distance of around 81,500 km. This mission returned the
                    very first close-up /images of the planet, its ring system
                    and its orbiting moons.
                  </p>
                </div>
              </div>
              <div className="solar-side-info hidden" id="sideInfoNeptune">
                <div className="solar-header-container">
                  <div className="close-button">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <h3>
                    Neptune <span className="text-yellow">Facts</span>
                  </h3>
                </div>

                <div className="side-points">
                  <div className="fact-count">1</div>
                  <p>
                    Neptune also has a second storm called the Small Dark Spot.
                    This storm is around the same size as Earth’s moon.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">2</div>
                  <p>
                    Neptune spins very quickly on its axis. The planets
                    equatorial clouds take 18 hours to complete one rotation.
                    The reason this happens is that Neptune does not have a
                    solid body.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">3</div>
                  <p>
                    Like the other outer planets, Neptune possesses a ring
                    system, though its rings are very faint. They are most
                    likely made up of ice particles and grains of dust with a
                    carbon-based substance coating them.
                  </p>
                </div>
                <div className="side-points">
                  <div className="fact-count">4</div>
                  <p>
                    The climate on Neptune is extremely active. In its upper
                    atmosphere, large storms sweep across it and high-speed
                    solar winds track around the planet at up to 1,340 km per
                    second. The largest storm was the Great Dark Spot in 1989
                    which lasted for around five years.
                  </p>
                </div>
              </div>
            </div>

            <figure className="solar-sun">
              <Canvas>
                <Sun />
              </Canvas>
            </figure>

            <figure className="solar-mercury">
              <Canvas>
                <Mercury />
              </Canvas>{" "}
            </figure>

            <figure className="solar-venus">
              <Canvas>
                <Venus />
              </Canvas>{" "}
            </figure>

            <figure className="solar-earth">
              <Canvas>
                <Earth />
              </Canvas>
            </figure>

            <figure className="solar-mars">
              <Canvas>
                <Mars />
              </Canvas>
            </figure>

            <figure className="solar-jupiter">
              <Canvas>
                <Jupiter />
              </Canvas>{" "}
            </figure>

            <figure className="solar-saturn">
              <Canvas>
                <Saturn />
              </Canvas>
            </figure>

            <figure className="solar-uranus">
              <Canvas>
                <Uranus />
              </Canvas>{" "}
            </figure>
            <figure className="solar-neptune">
              <Canvas>
                <Neptune />
              </Canvas>{" "}
            </figure>
          </div>
        </section>

        <section className="planet-info" id="planetData">
          {dataItem !== null ? detailsForPlanets() : null}
        </section>

        <section className="apollo-section flex-center" id="apollo11">
          <div className="space-event">
            <div className="space-item">
              <img src="/images/apollo-2.jpg" className="space-image" />
            </div>
            <div className="space-item">
              <img src="/images/apollo-1.jpg" className="space-image" />
            </div>
            <div className="space-item space-info">
              <h3 className="text-yellow">Apollo 11</h3>
              <p>
                Apollo 11 was the American spaceflight that first landed humans
                on the Moon. Commander Neil Armstrong and lunar module pilot
                Buzz Aldrin landed the Apollo Lunar Module Eagle on July 20,
                1969 and Armstrong became the first person to step onto the
                Moon's surface six hours and 39 minutes later, on July 21 at
                02:56 UTC.
              </p>
            </div>
            <div className="space-item">
              <img src="/images/apollo-3.jpg" className="space-image" />
            </div>
            <div className="space-item">
              <img src="/images/apollo-4.jpg" className="space-image" />
            </div>
            <div className="space-item">
              <img src="/images/apollo-5.jpg" className="space-image" />
            </div>
          </div>
        </section>

        <section className="flex-center" id="metrics">
          <div className="planet-metric">
            <div className="planet-card">
              <div className="planet-icon flex-center">
                <div className="planet-letter seven-letter">M</div>
                <div className="planet-letter seven-letter">E</div>
                <div className="planet-letter seven-letter">R</div>
                <div className="planet-letter seven-letter">C</div>
                <div className="planet-letter seven-letter">U</div>
                <div className="planet-letter seven-letter">R</div>
                <div className="planet-letter seven-letter">Y</div>
              </div>
              <div className="metrics">
                <div className="moons">
                  <h5>Moons</h5>
                  <p>0</p>
                </div>
                <div className="gravity">
                  <h5>Gravity</h5>
                  <p>
                    3.7m/s<sup>2</sup>
                  </p>
                </div>

                <div className="rotation">
                  <h5>Rotation Period</h5>
                  <p>1407.6 hours</p>
                </div>

                <div className="orbital">
                  <h5>Orbital period</h5>
                  <p>88.0 Days</p>
                </div>
              </div>
            </div>
            <div className="planet-card">
              <div className="planet-icon flex-center">
                <div className="planet-letter five-letter">V</div>
                <div className="planet-letter five-letter">E</div>
                <div className="planet-letter five-letter">N</div>
                <div className="planet-letter five-letter">U</div>
                <div className="planet-letter five-letter">S</div>
              </div>
              <div className="metrics">
                <div className="moons">
                  <h5>Moons</h5>
                  <p>0</p>
                </div>
                <div className="gravity">
                  <h5>Gravity</h5>
                  <p>
                    8.9m/s<sup>2</sup>
                  </p>
                </div>

                <div className="rotation">
                  <h5>Rotation Period</h5>
                  <p>5832.5 hours</p>
                </div>

                <div className="orbital">
                  <h5>Orbital period</h5>
                  <p>224.7 Days</p>
                </div>
              </div>
            </div>
            <div className="planet-card">
              <div className="planet-icon flex-center">
                <div className="planet-letter five-letter">E</div>
                <div className="planet-letter five-letter">A</div>
                <div className="planet-letter five-letter">R</div>
                <div className="planet-letter five-letter">T</div>
                <div className="planet-letter five-letter">H</div>
              </div>
              <div className="metrics">
                <div className="moons">
                  <h5>Moons</h5>
                  <p>1</p>
                </div>
                <div className="gravity">
                  <h5>Gravity</h5>
                  <p>
                    9.8m/s<sup>2</sup>
                  </p>
                </div>

                <div className="rotation">
                  <h5>Rotation Period</h5>
                  <p>23.9 hours</p>
                </div>

                <div className="orbital">
                  <h5>Orbital period</h5>
                  <p>365.2 Days</p>
                </div>
              </div>
            </div>
            <div className="planet-card">
              <div className="planet-icon flex-center">
                <div className="planet-letter four-letter">M</div>
                <div className="planet-letter four-letter">A</div>
                <div className="planet-letter four-letter">R</div>
                <div className="planet-letter four-letter">S</div>
              </div>
              <div className="metrics">
                <div className="moons">
                  <h5>Moons</h5>
                  <p>2</p>
                </div>
                <div className="gravity">
                  <h5>Gravity</h5>
                  <p>
                    3.7m/s<sup>2</sup>
                  </p>
                </div>

                <div className="rotation">
                  <h5>Rotation Period</h5>
                  <p>24.6 hours</p>
                </div>

                <div className="orbital">
                  <h5>Orbital period</h5>
                  <p>687.0 Days</p>
                </div>
              </div>
            </div>
            <div className="planet-card">
              <div className="planet-icon flex-center">
                <div className="planet-letter seven-letter">J</div>
                <div className="planet-letter seven-letter">U</div>
                <div className="planet-letter seven-letter">P</div>
                <div className="planet-letter seven-letter">I</div>
                <div className="planet-letter seven-letter">T</div>
                <div className="planet-letter seven-letter">E</div>
                <div className="planet-letter seven-letter">R</div>
              </div>
              <div className="metrics">
                <div className="moons">
                  <h5>Moons</h5>
                  <p>79</p>
                </div>
                <div className="gravity">
                  <h5>Gravity</h5>
                  <p>
                    23.1m/s<sup>2</sup>
                  </p>
                </div>

                <div className="rotation">
                  <h5>Rotation Period</h5>
                  <p>9.9 hours</p>
                </div>

                <div className="orbital">
                  <h5>Orbital period</h5>
                  <p>4331 Days</p>
                </div>
              </div>
            </div>
            <div className="planet-card">
              <div className="planet-icon flex-center saturn-icon">
                <div className="planet-letter six-letter">S</div>
                <div className="planet-letter six-letter">A</div>
                <div className="planet-letter six-letter">T</div>
                <div className="planet-letter six-letter">U</div>
                <div className="planet-letter six-letter">R</div>
                <div className="planet-letter six-letter">N</div>
              </div>
              <div className="metrics">
                <div className="moons">
                  <h5>Moons</h5>
                  <p>82</p>
                </div>
                <div className="gravity">
                  <h5>Gravity</h5>
                  <p>
                    9.0m/s<sup>2</sup>
                  </p>
                </div>

                <div className="rotation">
                  <h5>Rotation Period</h5>
                  <p>10.7 hours</p>
                </div>

                <div className="orbital">
                  <h5>Orbital period</h5>
                  <p>10,747 Days</p>
                </div>
              </div>
            </div>
            <div className="planet-card">
              <div className="planet-icon flex-center">
                <div className="planet-letter six-letter">U</div>
                <div className="planet-letter six-letter">R</div>
                <div className="planet-letter six-letter">A</div>
                <div className="planet-letter six-letter">N</div>
                <div className="planet-letter six-letter">U</div>
                <div className="planet-letter six-letter">S</div>
              </div>
              <div className="metrics">
                <div className="moons">
                  <h5>Moons</h5>
                  <p>27</p>
                </div>
                <div className="gravity">
                  <h5>Gravity</h5>
                  <p>
                    8.7m/s<sup>2</sup>
                  </p>
                </div>

                <div className="rotation">
                  <h5>Rotation Period</h5>
                  <p>17.2 hours</p>
                </div>

                <div className="orbital">
                  <h5>Orbital period</h5>
                  <p>30,589 Days</p>
                </div>
              </div>
            </div>
            <div className="planet-card">
              <div className="planet-icon flex-center">
                <div className="planet-letter seven-letter">N</div>
                <div className="planet-letter seven-letter">E</div>
                <div className="planet-letter seven-letter">P</div>
                <div className="planet-letter seven-letter">T</div>
                <div className="planet-letter seven-letter">U</div>
                <div className="planet-letter seven-letter">N</div>
                <div className="planet-letter seven-letter">E</div>
              </div>
              <div className="metrics">
                <div className="moons">
                  <h5>Moons</h5>
                  <p>14</p>
                </div>
                <div className="gravity">
                  <h5>Gravity</h5>
                  <p>
                    11.0m/s<sup>2</sup>
                  </p>
                </div>

                <div className="rotation">
                  <h5>Rotation Period</h5>
                  <p>16.1 hours</p>
                </div>

                <div className="orbital">
                  <h5>Orbital period</h5>
                  <p>59,800 Days</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-content">
            <h3 className="fw-300">
              <a href="#home" className="logo">
                3D <span className="text-yellow fw-700">Space View</span>
              </a>
            </h3>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SubHome;
