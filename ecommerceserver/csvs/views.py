from django.shortcuts import render
from .forms import CsvModelForm
from .models import Csv
import csv
from chatroom.models import Category, Electronics
#from django.http import HttpResponse
# Create your views here.

def upload_file_view(request):
    form = CsvModelForm(request.POST or None, request.FILES or None)
    if form.is_valid():
        form.save()
        form = CsvModelForm()
        obj = Csv.objects.filter(activated=False).first()
        with open(obj.file_name.path, 'r') as f:
            reader = csv.reader(f)
            for i, row in enumerate(reader):
                if i == 0:
                    pass
                else:
                    go  = Category.objects.filter(title=row[13]).first()
                    if go == None:
                        go = Category.objects.create(
                            title = row[13]
                        )
                    Electronics.objects.create(
                        name = row[21],
                        category = go,
                        priceMax = int(float(row[1])),
                        priceMin = int(float(row[2])),
                        priceMerchant = row[8],
                        brand = row[12],
                        manufacturer = row[19]
                    )
            obj.activated = True
            obj.save()
    return render(request, 'csvs/upload.html', {'form': form})    
