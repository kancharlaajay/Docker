ARG version
# here, ${version:-9} represents if user not defined any version, it will automatically takes the version:9
FROM almalinux:${version:-9}    
ENV name="Ajay"
    surname="kancharla"
    age="25"
ARG course="DevOps with AWS"
RUN echo "Hello User: ${USERNAME}, image version: ${version}" > /tmp/devops.txt
CMD ["sleep", "100"]