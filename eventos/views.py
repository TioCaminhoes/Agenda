from django.shortcuts import render, get_object_or_404
from .models import Evento, Local, Inscricao, Categoria, Atividade, Relatorio
from django.utils import timezone

def index(request):
    eventos = Evento.objects.filter(data_inicio__gte = timezone.now()).order_by('data_inicio')
    categorias_id = request.GET.getlist('categoria')
    if categorias_id:
        eventos = eventos.filter(categoria__id__in = categorias_id)
    categorias = Categoria.objects.all()
    return render(request, 'index.html', {'eventos': eventos, 
                                          'categorias': categorias, 
                                          'categorias_id': categorias_id
                                          })

def detalhe(request, pk):
    evento = get_object_or_404(Evento, pk = pk)
    return render(request, 'detalhe.html', {'evento': evento})

def local(request, pk):
    local = get_object_or_404(Local, pk = pk)
    eventos_do_local = Evento.objects.all()
    return render(request, 'local.html', {'local': local, 'eventos': eventos_do_local})