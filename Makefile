include .env
export

.PHONY: compose-up
compose-up:
	docker compose up -d

.PHONY: compose-down
compose-down:
	docker compose down

.PHONY: exec-front
exec-front:
	docker exec -it front sh

.PHONY: kube-deploy
kube-deploy:
	@if [ ! ${tag} ] | [ ! ${env} ]; \
	  then \
		echo "=============================================================="; \
	    echo "=============================================================="; \
		echo "The arguments [env] [tag] is necessary"; \
		echo "follow the format below if using makefile -> "; \
		echo "make kube-deploy env={your env} tag={your tag}"; \
		echo "=============================================================="; \
		echo "=============================================================="; \
		exit 0; \
	fi; \
	if [ $(env) = "prod" ]; \
	  then \
		echo "deploy to prod"; \
		GCP_IMAGE_NAME=$(GCP_IMAGE_NAME_PROD); \
		GCP_CONTAINER_NAME=$(GCP_CONTAINER_NAME_PROD); \
		GCP_DEPLOYMENT_NAME=$(GCP_DEPLOYMENT_NAME_PROD); \
		GCP_CLOUD_BUILD_PATH=$(GCP_CLOUD_BUILD_PATH_PROD); \
		gcloud container clusters get-credentials sport-india1 --region asia-south1 --project sport-319603; \
	elif [ $(env) = "pre" ]; \
	  then \
		echo "deploy to pre"; \
		GCP_IMAGE_NAME=$(GCP_IMAGE_NAME_PRE); \
		GCP_CONTAINER_NAME=$(GCP_CONTAINER_NAME_PRE); \
		GCP_DEPLOYMENT_NAME=$(GCP_DEPLOYMENT_NAME_PRE); \
		GCP_CLOUD_BUILD_PATH=$(GCP_CLOUD_BUILD_PATH_PRE); \
		gcloud container clusters get-credentials sport-india1 --region asia-south1 --project sport-319603; \
	elif [ $(env) = "dev" ]; \
	  then \
	    echo "deploy to dev"; \
		GCP_IMAGE_NAME=$(GCP_IMAGE_NAME_DEV); \
		GCP_CONTAINER_NAME=$(GCP_CONTAINER_NAME_DEV); \
		GCP_DEPLOYMENT_NAME=$(GCP_DEPLOYMENT_NAME_DEV); \
		GCP_CLOUD_BUILD_PATH=$(GCP_CLOUD_BUILD_PATH_DEV); \
		gcloud container clusters get-credentials sport-dev --zone asia-east1-c --project sport-319603; \
	fi; \
	gcloud builds submit --config $$GCP_CLOUD_BUILD_PATH --substitutions=TAG_NAME="$(tag)",SHORT_SHA="$$(git rev-parse --short HEAD)"; \
	kubectl set image deployment/$$GCP_DEPLOYMENT_NAME $$GCP_CONTAINER_NAME="$$GCP_IMAGE_NAME:$(tag)"; \
	kubectl rollout status deployment $$GCP_DEPLOYMENT_NAME;

.PHONY: kube-restart
kube-restart:
	@if [ ! ${env} ]; \
	  then \
		echo "=============================================================="; \
		echo "=============================================================="; \
		echo "The arguments [env] is necessary"; \
		echo "follow the format below if using makefile -> "; \
		echo "make kube-restart env={your env}"; \
		echo "=============================================================="; \
		echo "=============================================================="; \
		exit 0; \
	fi; \
	if [ $(env) = "prod" ]; \
	  then \
		echo "deploy to prod"; \
		GCP_DEPLOYMENT_NAME=$(GCP_DEPLOYMENT_NAME_PROD); \
		gcloud container clusters get-credentials sport-india1 --region asia-south1 --project sport-319603; \
	elif [ $(env) = "pre" ]; \
	  then \
		echo "deploy to pre"; \
		GCP_DEPLOYMENT_NAME=$(GCP_DEPLOYMENT_NAME_PRE); \
		gcloud container clusters get-credentials sport-india1 --region asia-south1 --project sport-319603; \
	elif [ $(env) = "dev" ]; \
	  then \
	    echo "deploy to dev"; \
		GCP_DEPLOYMENT_NAME=$(GCP_DEPLOYMENT_NAME_DEV); \
		gcloud container clusters get-credentials sport-dev --zone asia-east1-c --project sport-319603; \
	fi; \
	kubectl rollout restart deployment $$GCP_DEPLOYMENT_NAME; \
	kubectl rollout status deployment $$GCP_DEPLOYMENT_NAME;

.PHONY: gcloud-build
gcloud-build:
	@if [ ! ${tag} ] | [ ! ${env} ]; \
	  then \
		echo "=============================================================="; \
	    echo "=============================================================="; \
		echo "The arguments [env] [tag] is necessary"; \
		echo "follow the format below if using makefile -> "; \
		echo "make gcloud-build env={your env} tag={your tag}"; \
		echo "=============================================================="; \
		echo "=============================================================="; \
		exit 0; \
	fi; \
	if [ $(env) = "prod" ]; \
	  then \
		echo "builds prod"; \
		gcloud container clusters get-credentials sport-india1 --region asia-south1 --project sport-319603; \
		GCP_CLOUD_BUILD_PATH=$(GCP_CLOUD_BUILD_PATH_PROD); \
	elif [ $(env) = "pre" ]; \
	  then \
	    echo "builds pre-production"; \
		gcloud container clusters get-credentials sport-india1 --region asia-south1 --project sport-319603; \
		GCP_CLOUD_BUILD_PATH=$(GCP_CLOUD_BUILD_PATH_PRE); \
	elif [ $(env) = "dev" ]; \
	  then \
		echo "builds dev"; \
		gcloud container clusters get-credentials sport-dev --zone asia-east1-c --project sport-319603; \
		GCP_CLOUD_BUILD_PATH=$(GCP_CLOUD_BUILD_PATH_DEV); \
	fi; \
	gcloud builds submit --config $$GCP_CLOUD_BUILD_PATH --substitutions=TAG_NAME="$(tag)",SHORT_SHA="$$(git rev-parse --short HEAD)";


