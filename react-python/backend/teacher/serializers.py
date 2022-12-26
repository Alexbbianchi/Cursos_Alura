from rest_framework import serializers
from teacher.models import Teacher

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        # fields = ('id', 'name', 'hour_value', 'description', 'photo')
        fields = '__all__'