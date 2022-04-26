import { response } from 'express';
import requestAPI from '../../../Course-Portal-config-API';

const CourseID = '624a9dca856358d49f6a6be9';
const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0aW9uIjp7ImZhY3VsdHlJZCI6IjUzIn0sIl9pZCI6IjYyNTNiMGRlOGFlN2IyNGUxYjczNGJhMyIsImVtYWlsIjoidmlydGMuYWRtaW5AY211LmFjLnRoIiwibmFtZSI6IlZpcnR1YWwgQ2xhc3MgUm9vbSBBZG1pbiIsImpvYlRpdGxlIjoiRW1wbG95ZWUiLCJtc2lkIjoiN2Q2ZjhiYjgtZTQzNi00YjdmLTk5ZjctOWI3NWVlYzkxMmRiIiwicm9sZXMiOltdLCJjcmVhdGVkQXQiOjE2NDk2NTE5MzQsInVwZGF0ZWRBdCI6MTY1MDg2ODg3MiwiX192IjowLCJhdXRob3JpemF0aW9uQ29kZSI6IjAuQVhFQTNfR0J6MW5lS1V5UjJxTGYwRXFuVVlEdHpUYzRnVkpGaGl0c2VCNXAzRXh4QUFBLkFRQUJBQUlBQUFELS1ETEEzVk83UXJkZGdKZzdXZXZyVlY5am9Md0Z1TE81MnNpWUtaNG9ySVIxREFvNl90WnFaak1jbTNqaUhJaXdPb1d6MXBWdjlwQlFBLXNrdno5MkdTbk40a2w3N0FxVFp2TXJXT3l1OXZfU1pSRUlYemlBTUVqMF9WSHV3T2NnTk11YlNHaFdqM3MtcHJiMkJtbDRlM0NZWEVmQ29TM21jdW1RWFlHSTEtblVNVUgwU1RzN0hEakVEQ2w4YWRSZFV2d1hZaVNLa3EwNXU0OEp6LW56bXRJOTBTa2lUd2ZOb3RsaFFfTWY4TFM4N05PUmVLblZnWlBiSGgwMUZHLWRQN3g3VDhRQjZtelRLcldlSkk3QTcydUJUQk8tQUoydzZUVFVYQ0tNajBXUzVIQ09DTlp0NmxmVWJFOE00MWRMR3pveThsbjU1MXVIc0lFUWpDdGhlU1RjWjZyejBVVVVtTjVWbjlzZlZ4QUdIdlJRemNsalliUEVudEprXzBZQlRCWEtTVTNqa3BRaEZUdTFWdTVBaW5IZzJ0WGZNQlVfNThPSXBlMUF3OUR0azUxUTREd2xQZHZTUUFpRzd1bU9za0lTQlVUZjMwMUZnZ3FCdHVGWW9CWHg3dnlFMndHdE9JY2hyYXRkR1ZOemcxM1plNE5wME44c1JhdkdIQVdGTkFxcUxwaVBiVEtsaE55RDR1aUlJc1NfeDdGenN0bXRnWXlVRDlvRnVvTFJ1aTZUS3RpYmdvVjQ1OHowX25LUUVaZVRTcHBHc21WYnE1R3ZaQnNCYkJjc1FFNzMtWlM3RE11dTZaamhOaFhDRHdNbDJLZjJnMTVQMEV5eWZ5dlVJMThycjNvZWN1U2dIRHg4NkN3aU9NQjJHSFk1UDJCYUtiWlVtNzlDYjkteVdLT0pRNWxBRy1mX1dBTGxjV2tWZEtXeERNYW1aQnViTUJIQXlKaDhyR2ZJZ3dfRjBaYkFFeVFvSVhJTmZTQUEiLCJpYXQiOjE2NTA4NjkzNTMsImV4cCI6MTY1MDk1NTc1M30.O2nNXBasJCbL0pQU09xSIexdS96hHHOgwXAgVMoPA2bt2Ve46pdHbu6ckgvwDqjSU-xFY72nkpft2bQxS-VpJlohFdRQWlSqdpBhcvUC9yePae8g-xYmR80usP7c1QIJAgZ3RuFS8LGCoB9uAG4cvQ8QBKS9l-usyJEdj-rjqwjAv668ID25lKsaO2EQG7zeK5SUCx1YMwrPq8jyKXE-JN56RSMkbTeZEU3tFprgtsiROlkce3cuTNoFKlGbRFN9L05H8FpVvmdWmi4H1ukmwkbzz4ITtxFNPHcojMpLiEIFNmNLG0hkN1o8fCFUNl0yZFU-1F8RMiHDgL78OACrNw';


describe('Get', () => {
  describe('Course', () => {
    it('Get Course by ID ', () => {
      return requestAPI
      .auth(accessToken,{type : 'bearer'})
      .get('/courses/'+CourseID+'/mapping')
      .set('Accept', 'application/json')
      .set('grant-type','accessToken')
      .expect(200)
    });
    it('Get Instrustor in Course ', () => {
      return requestAPI
      .get('/courses/'+ CourseID +'/instructors').set('Accept', 'application/json')
      .set({'grant-type':'client_credential','schedule-create-channel':'DjB94Jqi58p7GOQh9FZ6'})
      .expect(200)
      .then(requestAPI => {
          console.log(requestAPI.text)
          expect(requestAPI.text.length).toBeGreaterThan(2)
      });
    });
  });

});