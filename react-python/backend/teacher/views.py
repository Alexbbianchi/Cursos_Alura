from rest_framework.views import APIView
from rest_framework.views import Response

from teacher.models import Teacher
from teacher.serializers import TeacherSerializer

class TeacherAPIView(APIView):
    def get(self, request, format=None):
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        return Response(serializer.data, status=200)