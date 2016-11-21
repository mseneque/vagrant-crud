#!/usr/bin/env bash

apt-get update
apt-get install -y apache2
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
fi

apt-get install -y sqlite3
apt-get install -y git
apt-get install -y curl

# Extra dependancies
apt-get install -y build-essential checkinstall
apt-get install -y libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev

# Install Node.js v6.9.1 LTS and npm 3.10.8
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
apt-get install -y nodejs


# CHANGE DIRECTORY TO ROOT PROJECT DIRECTORY FOR NPM TO WORK!!
# install bower web package manager
npm install -g bower
npm install -g typescript
# npm install -g lite-server
# npm install -g concurrently
# npm install -g typings
# npm install --no-bin-links
# npm install -g tsd


# Update and compile python to version 3.4.5

pyver=`python3.4 -V`

if ! [ "$pyver" = "Python 3.4.5" ]; then
    cd /usr/src;
    wget https://www.python.org/ftp/python/3.4.5/Python-3.4.5.tgz;
    tar xzf Python-3.4.5.tgz;
    # Start compile ...
    cd /usr/src/Python-3.4.5
    ./configure
    make altinstall
fi;

echo "checking Python version installed ..."
python3.4 -V
echo "\n"


# Download pip3
cd /usr/src
curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
python3.4 get-pip.py


###  TODO  ###
# Download web project source code from git hub and place it in the shared Vagrant Dir
# and setup folder structure for web project #
git config --global user.name "Matthew Seneque"
git config --global user.email "mattseneque@gmail.com"
git config --global core.editor "nano"
git config --global color.ui true
git remote add origin https://gitihub.com/mseneque/vagrant-crud.git

# cd /vagrant
# git add .
# git commit -m "pressent tense meesage of changes"
# git push -u origin master

# Install Python Requirements
# get requirements with 'pip3 freeze > requirements.txt'
pip3 install -r /vagrant/python_requirements.txt

apt-get autoremove

# Use bower install after the 'bower.json' file is in the trendwise folder
# Save new dependencies to 'bower.json' with 'bower install PACKAGE --save'
# Bower usage: https://bower.io/
cd /vagrant/trendwise
bower install --allow-root