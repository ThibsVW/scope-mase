import React, { Fragment } from 'react';

const Training = () => {
  return (
    <Fragment>
      <div className='card'>
        <div className='card-header'>Responsible Service of Alcohol</div>
        <div className='card-body'>
          <h5 className='card-title'>Australian Hotels Association</h5>
          <p className='card-text'>
            The responsible service of alcohol is a key requirement of the
            Liquor Control Act. It is an offence to sell liquor to a person who
            is noticeably intoxicated. All bar staff, managers and licensees
            must be formally trained in responsible service. More information is
            in the policy statement regarding mandatory training in the
            responsible service of alcohol.
          </p>
          <a
            href='https://www.ahawa.asn.au/training/responsible_service_of_alcohol__rsa_.phtml'
            className='btn btn-primary'
            target='_blank'
          >
            Start the tranining
          </a>
        </div>
      </div>
      <br></br>
      <div className='card'>
        <div className='card-header'>Food Handler Course</div>
        <div className='card-body'>
          <h5 className='card-title'>Australian Institute of Food Safety</h5>
          <p className='card-text'>
            Develop a strong foundation of food safety skills and stay compliant
            with the Food Standards Code when you complete the official AIFS
            Food Handler course.
          </p>
          <a
            href='https://www.foodsafety.com.au/courses/food-handler-course'
            className='btn btn-primary'
            target='_blank'
          >
            Start the tranining
          </a>
        </div>
      </div>
      <br></br>
      <div className='card'>
        <div className='card-header'>Approved Manager Course</div>
        <div className='card-body'>
          <h5 className='card-title'>Australian Hotels Association</h5>
          <p className='card-text'>
            The licensee of a liquor licensed premises is required to have an
            Approved Manager on their premises at all times when business is
            conducted. In essence, the approved manager is also responsible for
            the day to day operations of the business and must ensure compliance
            with the provisions of the Act.
          </p>
          <a
            href='https://www.ahawa.asn.au/training/approved_managers_course_mlp1.phtml?gclid=Cj0KCQjwoJX8BRCZARIsAEWBFMJ5WOOx0ElPYgjdWIWYXAIZGV4aeJQvI8cg_ZyIh_bKmd_IlmpHg8saArlyEALw_wcB'
            className='btn btn-primary'
            target='_blank'
          >
            Start the tranining
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Training;
