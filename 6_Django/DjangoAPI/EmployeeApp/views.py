import re
from django.shortcuts import render
from django.views.decorators import csrf
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from EmployeeApp.models import Departments,Employees
from EmployeeApp.serializers import DepartmentSerializer,EmployeeSerializer

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def departmentApi(request,id=0):
    if request.method == 'GET':
        departments = Departments.objects.all()
        departments_serialzer = DepartmentSerializer(departments, many=True)
        return JsonResponse(departments_serialzer.data, safe=False)
    elif request.method == 'POST':
        department_data = JSONParser().parse(request)
        departments_serialzer = DepartmentSerializer(data=department_data)
        if departments_serialzer.is_valid():
            departments_serialzer.save()
            return JsonResponse('Added Successfully', safe=False)
        return JsonResponse('Failed to Add',safe=False)
    elif request.method == 'PUT':
        department_data = JSONParser().parse(request)
        department = Departments.objects.get(DepartmentId=department_data['DepartmentId'])
        departments_serialzer = DepartmentSerializer(department,data=department_data)
        if departments_serialzer.is_valid():
            departments_serialzer.save()
            return JsonResponse('Updated Successfully',safe=False)
        return JsonResponse('Failed to Update')
    elif request.method == 'DELETE':
        department = Departments.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse('Deleted Successfully',safe=False)

@csrf_exempt
def employeeApi(request,id=0):
    if request.method == 'GET':
        employees = Employees.objects.all()
        # print(Employees.objects.filter(Department='KMITL').first())
        employees_serialzer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serialzer.data, safe=False)
    elif request.method == 'POST':
        employee_data = JSONParser().parse(request)
        employees_serialzer = EmployeeSerializer(data=employee_data)
        if employees_serialzer.is_valid():
            employees_serialzer.save()
            return JsonResponse('Added Successfully', safe=False)
        return JsonResponse('Failed to Add',safe=False)
    elif request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        employee = Employees.objects.get(EmployeeId=employee_data['EmployeeId'])
        employees_serialzer = EmployeeSerializer(employee,data=employee_data)
        if employees_serialzer.is_valid():
            employees_serialzer.save()
            return JsonResponse('Updated Successfully',safe=False)
        return JsonResponse('Failed to Update')
    elif request.method == 'DELETE':
        employee = Employees.objects.get(EmployeeId=id)
        employee.delete()
        return JsonResponse('Deleted Successfully',safe=False)

@csrf_exempt
def SaveFile(request):
    file = request.FILES['file']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)
