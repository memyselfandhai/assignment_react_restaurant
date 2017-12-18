import React, { Component } from 'react';

const reservation = () => {


  return (
    <form action="/reservations" method="post">

    // <div style="overflow:hidden;">
    //     <div class="form-group">
    //         <div class="row">
    //             <div class="col-md-8">
    //                 <div id="datetimepicker12"></div>
    //             </div>
    //         </div>
    //     </div>
    //     // <script type="text/javascript">
    //     // // function() {
    //     // //         var x = document.getElementById('datetimepicker12');
    //     // //         x.datetimepicker({
    //     // //             inline: true,
    //     // //             sideBySide: true
    //     // //         });
    //     // //         return x;
    //     // //       }
    //     // </script>
    // </div>


    <div class="form-group">
    <label for="user_time">Time</label>
    <select name="user[time]" id="user_time" class="form-control">
      <option value="1000">10AM</option>
      <option value="1100">11AM</option>
      <option value="1200">12AM</option>
      <option value="1300">1PM</option>
      <option value="1400">2PM</option>
      <option value="1500">3PM</option>
      <option value="1600">4PM</option>
      <option value="1700">5PM</option>
      <option value="1800">6PM</option>
      <option value="1900">7PM</option>
      <option value="2000">8PM</option>
      <option value="2100">9PM</option>
      <option value="2200">10PM</option>
    </select>
    </div>


        <div class="form-group">
        <label for="user_number">Number of People</label>
        <select name="user[number]" id="user_number" class="form-control">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">Please Call</option>
        </select>
        </div>

      <div class="form-group">
        <input type="submit" class="btn btn-primary"/>
      </div>
    </form>
  );
};

export default reservation;
