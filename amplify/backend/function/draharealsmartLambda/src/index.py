import json
import boto3

client = boto3.client('lambda')

def handler(event, context):
  print('received event:')
  print(event)



  house1_like = event['house1_option']
  house2_like = event['house2_option']
  house3_like = event['house3_option']
  house4_like = event['house4_option']
  house5_like = event['house5_option']
  house6_like = event['house6_option']
  house7_like = event['house7_option']
  house8_like = event['house8_option']
  house9_like = event['house9_option']
  house10_like = event['house10_option']
  
  house1 = event['house1']
  house2 = event['house2']
  house3 = event['house3']
  house4 = event['house4']
  house5 = event['house5']
  house6 = event['house6']
  house7 = event['house7']
  house8 = event['house8']
  house9 = event['house9']
  house10 = event['house10']


  InputForRank = {


  'house1_like': house1_like,
  'house2_like': house2_like,
  'house3_like': house3_like,
  'house4_like': house4_like,
  'house5_like': house5_like,
  'house6_like': house6_like,
  'house7_like': house7_like,
  'house8_like': house8_like,
  'house9_like': house9_like,
  'house10_like': house10_like,

  
  'house1': house1
  'house2': house2
  'house3': house3
  'house4': house4
  'house5': house5
  'house6': house6
  'house7': house7
  'house8': house8
  'house9': house9
  'house10': house10

  }

  ResponseFromRank = client.invoke(

    FunctionName = 'arn:aws:lambda:us-east-1:209764057207:function:draha_real_lambda_input',
    InvocationType = 'RequestResponse',
    Payload = json.dumps(InputForRank)

    )

  ResponseFromRankJson = json.load(response['Payload'])


  Response = {


      'House_No1_Latitude': -33.777,
      'House_No1_Longitude': 151.0456, 

      'House_No2_Latitude': -33.777,
      'House_No2_Longitude': 151.0456, 

      'House_No3_Latitude': -33.777,
      'House_No3_Longitude': 151.0456, 

      'House_No4_Latitude': -33.777,
      'House_No4_Longitude': 151.0456, 

      'House_No5_Latitude': -33.777,
      'House_No5_Longitude': 151.0456, 


  }

  

  return {

		'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(Response)
  }
