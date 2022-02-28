#!/bin/bash

set -eo pipefail

docker_process_sql --database=nodedb <<<"CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key(id));"
