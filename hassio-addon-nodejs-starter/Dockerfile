ARG BUILD_FROM
FROM $BUILD_FROM

ENV LANG C.UTF-8

ADD package.json /

RUN apk add --no-cache nodejs-npm

# Copy data for add-on
COPY run.sh /
COPY index.js /
RUN chmod a+x /run.sh

RUN mkdir /tuyacontrol
ADD tuyacontrol.js /tuyacontrol/
RUN cd /tuyacontrol && npm install codetheweb/tuyapi 

CMD [ "/run.sh" ]




