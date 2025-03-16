"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Progress from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Car, DollarSign, History, Settings ,Star} from "lucide-react";
import { BasicSidebar } from "@/components/dashboard/dashboard-sidebar"
import { SidebarDrive } from "./driverside";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const earningsData = [
  { day: "Mon", earnings: 50 },
  { day: "Tue", earnings: 70 },
  { day: "Wed", earnings: 65 },
  { day: "Thu", earnings: 90 },
  { day: "Fri", earnings: 120 },
  { day: "Sat", earnings: 200 },
  { day: "Sun", earnings: 150 },
];

const userReviews = [
  {
    name: "John Doe",
    review: "Great driver! Very professional and friendly.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "Smooth ride and very punctual.",
    rating: 4,
  },
  {
    name: "Alice Johnson",
    review: "Good experience, but the car could be cleaner.",
    rating: 3,
  },
];
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const DriverDashboard = () => {
  return (
    <div className="flex">
   <SidebarDrive />
      <div className="ml-64 p-4 w-full bg-white text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="bg-gradient-to-r from-gray-700 to-gray-400 text-white p-6 rounded-lg shadow-lg mb-10">
              <h1 className="text-4xl font-bold mb-2">Welcome, Driver</h1>
              <p className="text-lg">We are glad to have you back. Let's get started with your rides!</p>
            </div>
          </div>
            {/* Live Ride Requests */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center mb-10">
            <Card className="w-full md:w-6/7 lg:w-6/7 min-h-[550px]">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold mb-4">Live Ride Requests</h2>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-2">
                  <p>📍 Pickup: Downtown - Dropoff: Airport</p>
                  <div>
                    <Button variant="outline" className="mr-2 text-white">Reject</Button>
                    <Button className="text-black border-2">Accept</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-2">
                  <p>📍 Pickup: Downtown - Dropoff: Airport</p>
                  <div>
                    <Button variant="outline" className="mr-2 text-white">Reject</Button>
                    <Button className="text-black border-2">Accept</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-2">
                  <p>📍 Pickup: Downtown - Dropoff: Airport</p>
                  <div>
                    <Button variant="outline" className="mr-2 text-white">Reject</Button>
                    <Button className="text-black border-2">Accept</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-2">
                  <p>📍 Pickup: Downtown - Dropoff: Airport</p>
                  <div>
                    <Button variant="outline" className="mr-2 text-white">Reject</Button>
                    <Button className="text-black border-2">Accept</Button>
                  </div>
                </div>
                
              </CardContent>
            </Card>
          </div>
         
           {/* Overview */}
           <Card >
            <CardContent className="flex flex-col items-center text-center p-4">
              <h2 className="text-lg font-semibold mb-2">Total Earnings</h2>
              <DollarSign className="w-8 h-8 text-green-500" />
              <p className="text-xl font-bold">$1,250</p>
              <Progress value={1250} max={2000} />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex flex-col items-center text-center p-4">
              <h2 className="text-lg font-semibold mb-2">Rides Completed</h2>
              <Car className="w-8 h-8 text-blue-500" />
              <p className="text-xl font-bold">320</p>
              <Progress value={320} max={500} />
            </CardContent>
          </Card>
          <Card>
              <CardContent className="flex flex-col items-center text-center p-4">
                <h2 className="text-lg font-semibold mb-2">Driver Rating</h2>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <Star className="w-6 h-6 text-gray-300 fill-current" />
                </div>
                <p className="text-xl font-bold mt-2">4.0</p>
              </CardContent>
            </Card>
         
          
      
          

          {/* Earnings Chart */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 mt-8 mb-11">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-4">Earnings Over Time</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={earningsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="earnings" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
           {/* User Reviews */}
           <Card className="col-span-1 md:col-span-2 lg:col-span-3 mt-">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-4">User Reviews</h2>
              <Slider {...sliderSettings}>
                {userReviews.map((review, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-lg font-bold">{review.name[0]}</span>
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">{review.name}</p>
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                          {[...Array(5 - review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-gray-300 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p>{review.review}</p>
                  </div>
                ))}
              </Slider>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </div>
  );
};

export default DriverDashboard;