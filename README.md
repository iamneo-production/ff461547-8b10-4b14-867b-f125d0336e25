# ff461547-8b10-4b14-867b-f125d0336e25
https://sonarcloud.io/summary/overall?id=examly-test_ff461547-8b10-4b14-867b-f125d0336e25

# Backend URL
***provide backend url in config.js of react app.

# PrePare backend database to ensure project properly
# For Hotels 
    1. Insert entries in users table using sql.
    2. Insert entries in customers and travel_agent table, while inserting provide corresponding user_id of users table using sql.
    3. Insert Hotel data using api call before searching in following jason format and request format.

    Http request type = post,
    mapping url = /hotels

    Json:

        {
            "hotelName": "Avenue Stay",
            "country": "India",
            "city": "Delhi",
            "maxRooms": 100,
            "availableRooms": 4,
            "pricePerDay": 8000,
            "rating": 0.0,
            "numOfRating": 0,
            "vaccantRoomList": [
                {
                    "roomNumber": 301,
                    "roomType": "double bed",
                    "numOfbeds": 1,
                    "roomCapacity": 2,
                    "roomStatus": "vaccant"
                },
                {
                    "roomNumber": 315,
                    "roomType": "single bed",
                    "numOfbeds": 2,
                    "roomCapacity": 4,
                    "roomStatus": "vaccant"
                },
                {
                    "roomNumber": 304,
                    "roomType": "double bed",
                    "numOfbeds": 3,
                    "roomCapacity": 9,
                    "roomStatus": "vaccant"
                },
                {
                    "roomNumber": "302",
                    "roomType": "single bed",
                    "numOfbeds": 2,
                    "roomCapacity": 4,
                    "roomStatus": "vaccant"
                },
                {
                    "roomNumber": "321",
                    "roomType": "double bed",
                    "numOfbeds": 2,
                    "roomCapacity": 6,
                    "roomStatus": "vaccant"
                }
            ],
            "bookedRoomList":[
                {
                    "roomNumber": 316,
                    "roomType": "single bed",
                    "numOfbeds": 2,
                    "roomCapacity": 4,
                    "roomStatus": "booked"
                }
            ]
        }

    5. Insert 2 hotel images for each hotel using following api call format, its optional:-
    Http request type = Post
    data format = form data
    form-data :
    <!-- key         value -->
    hotelId       =     1 
    hotelImage    =     image file
    
    6. Now go to hotel page , fill proper input data you can add maximum apto 5 rooms for each search/booking. After that hit search and application will fetch the data based on county, city, number of rooms and number of travellers in each room.
