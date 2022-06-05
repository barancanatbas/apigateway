# a small example of apigateway


## run with docker-compose
```bash
  $ docker-compose up -d
```

## the purpose of the application
We have two applications named Firstservice and Secondservice. You can reach them with different ip addresses from the frontend, but it will be easier to reach them through a single ip address.
For this, we set up an api gateway structure. basically it works like a proxy. directs incoming requests to the required services.

![image](https://user-images.githubusercontent.com/64152397/172058645-908b86aa-2c12-4ee7-bee0-30e0e7c4cb9d.png)

For more information about apigateway : https://microservices.io/patterns/apigateway.html
