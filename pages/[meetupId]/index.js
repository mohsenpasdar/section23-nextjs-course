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

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/1200px-Netflix-avatar.png",
        id: meetupId,
        title: "meet up people",
        address: "12345, city",
        description: "An interesting meetup",
      },
    },
  };
};

export default MeetupDetails;
