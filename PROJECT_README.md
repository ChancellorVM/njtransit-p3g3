# **EXPANDING NJ TRANSIT**
A Project by Shannon Allotey, Hunter Davis, Vinay Madhugiri, and Sofia Pai

**NJ Transit Data Courtesy of the New Jersey Geographic Information Network (NJGIN) Open Data portal**

NJ Transit Rail Lines Data Source: https://njogis-newjersey.opendata.arcgis.com/datasets/e6701817be974795aecc7f7a8cc42f79_0/explore

NJ Transit Rail Stations Data Source: https://njogis-newjersey.opendata.arcgis.com/datasets/4809dada94c542e0beff00600ee930f6_0/explore

NJ Municipalities: https://njogis-newjersey.opendata.arcgis.com/datasets/1c6b26a9a14e4132895194e80d6b30f8_0/explore

NJ Railroads Map: https://njogis-newjersey.opendata.arcgis.com/datasets/NJDOT::railroads-network/explore?layer=1


# Introduction

New Jersey is the most densely populated state in America, and it far exceeds the second and third most densely populated states in total population. New Jersey is also a global economic powerhouse, with a GDP rivaling Poland and a GDP Per Capita higher than the Netherlands. These factors mean that New Jersey deserves a genuine world-class regional rail network.

While NJ Transit is superior to many rail networks in the U.S., it falls well short of being the world-class regional rail network it could be. 

With this project, we identify gaps in NJ Transit’s current commuter rail system and opportunities to expand along existing freight rail corridors, highlighting the moment the State has to greatly impact tens of thousands of residents' freedom of movement across their communities. This becomes paramount to unlocking previously geographically and socioeconomically gatekept labor markets and avenues of commerce.

We collected, cleaned, stored, analyzed, and visualized NJ Transit Data Courtesy of the New Jersey Geographic Information Network (NJGIN) Open Data portal to cross-examine the following questions:
1. What does NJ Transit’s current rail service look like?
2. What are the ideal conditions for a municipality to have a station?
3. Where are the gaps in the current NJ Transit map?
4. What municipalities would be good candidates for expansion?
5. What could an expanded NJ Transit look like?


# Part 1: Visualize Current NJ Transit Rail Service
The first step was to look at what NJ Transit's current Commuter Rail service looked like and ascertain important information such as which municipality the stations were located in and what the population of these municipalities was. This information is displayed below:

![alt text](https://github.com/ChancellorVM/njtransit-p3g3/blob/main/Images/VIS1.PNG)

The blue lines represent the current NJ Transit Commuter Rail Network, while the black icons indicate stations served by NJ Transit.


# Part 2: Identify Gaps in Service
After NJ Transit's current network was visualized, we needed to identify the gaps in the network. 

To do this, we expanded upon our initial map by adding choropleth layers depicting the municipalities of New Jersey, with the colors based on both the population and the population density. With these layers, it becomes clearer which municipalities are ignored by NJ Transit's Commuter Rail network and displays information relevant to making determinations for future stations. 

We also added a layer showcasing the true extent of the rail network in New Jersey. These include not just the routes served by NJ Transit, but also the numerous freight rail lines that connect major cargo terminals to the rest of the state and the nation at large.



![alt text](https://github.com/ChancellorVM/njtransit-p3g3/blob/main/Images/VIS2_STATIONS.PNG)

Visualization of NJ Transit Stations

![alt text](https://github.com/ChancellorVM/njtransit-p3g3/blob/main/Images/VIS2_POPDENS.PNG)

Visualization of NJ Municipalities by Population Density

![alt text](https://github.com/ChancellorVM/njtransit-p3g3/blob/main/Images/VIS2_TOTALPOP.PNG)

Visualization of NJ Municipalities by Total Population

![alt text](https://github.com/ChancellorVM/njtransit-p3g3/blob/main/Images/VIS2_RAILROADS.PNG)

Visualization of the entire NJ Rail Network

![alt text](https://github.com/ChancellorVM/njtransit-p3g3/blob/main/Images/VIS2_RAILLINES.PNG)

Visualization of NJ Transit's Route Network

![alt text](https://github.com/ChancellorVM/njtransit-p3g3/blob/main/Images/VIS2_TOTAL.PNG)

Complete Data Visualization

# Part 3: In-Fill Opportunities
After viewing the choropleth map with the rail line overlays, we start to find some intriguing opportunities for expansion. Before exploring potential new lines, it is important to note where stations can be added to the existing route network.

**Northeast Corridor In-Fill**

Perfectly situated between the Princeton Junction and Jersey Avenue stations, the townships of North Brunswick and South Brunswick are prime candidates for in-fill development. Both municipalities have populations above 40,000 people and are bisected by the Northeast Corridor Right-of-Way (ROW). These municipalities are also set to grow in population given their proximity to New York City, as well as their location between Princeton University and Rutgers University. Currently, residents of these townships are forced to drive to either Princeton Junction or Jersey Avenue/New Brunswick to access the Northeast Corridor. Adding stations in these municipalities will reduce the time it takes for commuters to catch train service to New York or the nearby universities, while also reducing the amount of traffic on US-1, US-130, and NJ-27.

**Atlantic City Line In-Fill**

While the southern portion of New Jersey is more sparsely populated than the northern and central portions, there are still opportunities for in-fill development along South Jersey's sole NJ Transit line. Of note, a station in Egg Harbor Township (not to be confused with Egg Harbor City, which does have a station) would not only serve the over 47,000 residents of the municipality but also the over 37,000 residents of nearby Galloway Township and the over 27,000 residents of Hamilton Township. The nearly 40,000 residents of Winslow Township would also benefit from a station on the Atlantic City Line.

# Part 4: New Lines

It is at this stage that we can begin to grow the network beyond the constraints of its current lines. These new lines will utilize existing Freight ROWs but may need to be widened to accommodate passenger service and electrified to allow NJ Transit to use faster, more energy-efficient Electrical Multiple Unit (EMU) trains.

**The Hudson Line and the West Nyack Line**

Sandwiched between NJ Transit's Pascack Valley Line and the Hudson River are two sets of Freight ROW that run through populous municipalities like Englewood, Teaneck, and Tenafly that are a stone's throw away from New York City. 

*Hudson Line*

- Northvale
- Closter Borough
- Tenafly
- Englewood
- Palisades Park
- North Bergen
- Jersey City

*West Nyack Line*

- West Nyack (NY)
- Blauvelt (NY)
- Orangeburg (NY)
- Norwood
- Harrington Park
- Dumont
- Bergenfield
- Teaneck
- Bogota
- Ridgefield Park Village
- Ridgefield Borough
- North Bergen
- Jersey City

Using the Northern Running Track and the River Line Freight ROWs respectively, these routes would connect from Newark through Jersey City before heading north towards the state line. While the Hudson Line would terminate just shy of New York State, the West Nyack Line provides an interesting opportunity to collaborate with the State of New York, as the track north of West Nyack continues to Albany. As such, NJ Transit service to West Nyack could connect riders to services provided by the state of New York, or connect to Albany on one seat in an arrangement similar to the Port Jervis Line.


**The Sparta Line**

This line would connect the densely populated North-East of the state to the more sparsely populated North-West of the State.

*Sparta Line*

- Vernon Township
- Sparta Township
- Jefferson Township
- West Milford Township
- Kinnelon Township
- Pompton Lakes Borough
- Oakland Borough
- Franklin Lakes Borough
- Wyckoff Township
- Hawthorne Borough
- Paterson
- Elmwood Park Borough
- Saddle Brook Township
- Maywood
- Hackensack Borough
- Ridgefield Park Village
- Ridgefield Borough
- North Bergen
- Jersey City

Initially following the same path as the West Nyack Line, the Sparta Line would diverge at Ridgefield Park Village towards Hackensack using the NYS&W ROW to wind its way across North Jersey before reaching the state line at Vernon. This line could continue to Campbell-Hall Station to Port Jervis much like the existing Port Jervis Line.


**Delaware River Expansion**

These lines would connect to existing NJ Transit Lines, but complete the journey to the Delaware River and the NJ/PA State Line.

*Lackawanna Line*

- East Stroudsburg (PA)
- Blairstown Township
- Green Township
- Byram Township
- Roxbury Township

The Lackawanna Line would use the Lackawanna Cut-Off and diverge from the Morristown Line at Roxbury Township before heading towards the Delaware Water Gap and East Stroudsburg. From there, riders can take the proposed Amtrak Service on to Scranton.

*Lehigh Line*

- Phillipsburg
- Bethlehem Township
- Readington Township
- Hillsborough Township
- Manville Borough
- Bound Brook Borough

The Lehigh Line would follow its namesake from Phillipsburg to Bound Brook, where it would join the Raritan Valley Line onto New York City.

*Lambertville Line*

- Lambertville
- Flemington Borough
- Readington Township
- Hillsborough Township
- Manville Borough
- Bound Brook Borough

The Lambertville Line would be another spur off of the Raritan Valley Line but would connect to the tourist towns of Lambertville and New Hope.

*West Trenton Line*

- Ewing/West Trenton Station
- Ewing/TTN-TCNJ Station
- Pennington Borough
- Hopewell Borough
- Montgomery Township
- Hillsborough Township
- Manville Borough
- Bound Brook Borough

One final spur of the Raritan Valley Line would connect Bound Brook to the current West Trenton SEPTA station in Ewing, while also providing access to Trenton-Mercer Airport and The College of New Jersey, also in Ewing.


**Central Jersey Expansion**

*Middlesex-Ocean-Monmouth Line*

- Winslow Township
- Manchester Township
- Lakehurst Borough
- Lakewood Township
- Farmingdale Borough
- Freehold Borough
- Manalapan Township
- Monroe Township
- Jamesburg Borough
- South Brunswick Township

This line would take a potential Winslow Township station on the Atlantic City Line and connect it through the highly populated municipalities of Ocean and Monmouth Counties before eventually joining with the Northeast Corridor in South Brunswick Township. With this line, some of the most populous towns in New Jersey will have better access not just to New York City, but their own state's flagship public university.


**South Jersey Expansion**

*Cape May Line*

- Cape May
- Lower Township
- Middle Township
- Upper Township
- Buena Vista Township
- Winslow Township

With this line, it will be possible to travel from the southern tip of the state to the northern portion, while accessing most of the major universities and the Big Apple. Riders from the north will also gain easier access to the beauty of New Jersey's Southern Coast.


# Part 5: Benefits and Conclusion

This plan is beneficial for the people of New Jersey because it increases their connectivity to the rest of the state. It also reduces car dependency, as more people can commute to work via NJ Transit than before.

Further steps could include retooling the NJ Transit Bus Network around the rail stations to expand the catchment area of each station. The network could also be expanded by building new lines in the medians of Highways - particularly in the median of US-195 and US-287. Integration could also be expanded through the transfer of PATH from the Port Authority to NJ Transit, allowing for better integration of the lines and stations into the NJ Transit Network.
