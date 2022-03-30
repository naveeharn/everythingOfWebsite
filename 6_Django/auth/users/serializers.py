from rest_framework import serializers
from .models import Post, Schedule, User

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class ScheduleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ['id','section', 'day', 'time']

class PostSerializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id','author', 'timestamp', 'description', 'schedules', 'requested']