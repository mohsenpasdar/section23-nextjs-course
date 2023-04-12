import React from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/1200px-Netflix-avatar.png"
      title="meet up people"
      address='12345, city'
      description='An interesting meetup'
    />
  );
};

export default MeetupDetails;
